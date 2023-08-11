import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './tools/tmbdBaseQuery/tmbdBaseQuery';

export const api = createApi({
  reducerPath: 'filmsApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getPopularFilms: builder.query({
      query: (page) => ({ url: `/discover/movie?page=${page}` }),
      keepUnusedDataFor: 20,
    }),
    getNowPlayingFilms: builder.query({
      query: (page) => ({ url: `/movie/now_playing?page=${page}` }),
    }),
    getTopRatingFilms: builder.query({
      query: (page) => ({ url: `/movie/top_rated?page=${page}` }),
    }),
    getUpcomingFilms: builder.query({
      query: (page) => ({ url: `/movie/upcoming?page=${page}` }),
    }),
    getSearchFilms: builder.query({
      query: (args) => {
        const { searchValue, page } = args;
        return { url: `/search/movie?query=${searchValue}&page=${page}` };
      },
    }),
    getFilmById: builder.query({
      query: (id) => ({ url: `/movie/${id}` }),
    }),
    getMoviePeople: builder.query({
      query: (id) => ({ url: `/movie/${id}/credits?language=en-US` }),
    }),
    getAllPeople: builder.query({
      query: (page) => ({ url: `/person/popular?page=${page}` }),
    }),
    getSearchPerson: builder.query({
      query: (args) => {
        const { name, page } = args;
        return { url: `/search/person?query=${name}&page=${page}` };
      },
    }),
    getPersonById: builder.query({
      query: (id) => ({ url: `/person/${id}` }),
    }),
    getPersonMovieCredits: builder.query({
      query: (id) => ({ url: `/person/${id}/movie_credits` }),
    }),
  }),
});

export const {
  useGetPopularFilmsQuery,
  useGetNowPlayingFilmsQuery,
  useGetTopRatingFilmsQuery,
  useGetUpcomingFilmsQuery,
  useGetSearchFilmsQuery,
  useGetFilmByIdQuery,
  useGetMoviePeopleQuery,
  useGetAllPeopleQuery,
  useGetSearchPersonQuery,
  useGetPersonByIdQuery,
  useGetPersonMovieCreditsQuery,
} = api;
