import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODRiNmNiZjY0Y2QyMjM0YzkzMzFhZjEwNmQxODllMyIsInN1YiI6IjY0YzI0YTMxMWNmZTNhMGViNDI5YjYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S300Bkc2BidjY9F9z2Ty6B8glEEcCa_8ePhoL6KJ8Y0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    getPopularFilms: builder.query({
      query: (page) => `/discover/movie?page=${page}`,
    }),
    getNowPlayingFilms: builder.query({
      query: (page) => `/movie/now_playing?page=${page}`,
    }),
    getTopRatingFilms: builder.query({
      query: (page) => `/movie/top_rated?page=${page}`,
    }),
    getUpcomingFilms: builder.query({
      query: (page) => `/movie/upcoming?page=${page}`,
    }),
    getSearchFilms: builder.query({
      query: (args) => {
        const { searchValue, page } = args;
        return `/search/movie?query=${searchValue}&page=${page}`;
      },
    }),
    getFilmById: builder.query({
      query: (id) => `/movie/${id}`,
    }),
    getMoviePeople: builder.query({
      query: (id) => `/movie/${id}/credits?language=en-US`,
    }),
    getAllPeople: builder.query({
      query: (page) => `/person/popular?page=${page}`,
    }),
    getSearchPerson: builder.query({
      query: (args) => {
        const { name, page } = args;
        return `/search/person?query=${name}&page=${page}`;
      },
    }),
    getPersonById: builder.query({
      query: (id) => `/person/${id}`,
    }),
    getPersonMovieCredits: builder.query({
      query: (id) => `/person/${id}/movie_credits`,
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
