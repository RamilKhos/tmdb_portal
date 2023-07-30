import axios from 'axios';
import { Component } from 'react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODRiNmNiZjY0Y2QyMjM0YzkzMzFhZjEwNmQxODllMyIsInN1YiI6IjY0YzI0YTMxMWNmZTNhMGViNDI5YjYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S300Bkc2BidjY9F9z2Ty6B8glEEcCa_8ePhoL6KJ8Y0';
const API_KEY = '984b6cbf64cd2234c9331af106d189e3';

const BASE_URL_FILMS = 'https://api.themoviedb.org/3';
const POSTER_URL = 'https://image.tmdb.org/t/p/w300/';

// export const getPosterFilm = async (posterPath) => {
//   const resp = await axios.get(POSTER_URL + posterPath);
//   console.log(resp);
// };

// getPosterFilm('rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg');

export const api = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_FILMS,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    getPopularFilms: builder.query({
      query: () => '/discover/movie',
    }),
  }),
});

export const { useGetPopularFilmsQuery } = api;

// class API extends Component {
//   constructor() {
//     super();
//     this.instance = axios.create({
//       baseURL: 'https://api.themoviedb.org/3',
//       headers: {
//         Accept: 'application/json',
//         Authorization: `Bearer ${TOKEN}`,
//       },
//     });
//     this.imageURL = 'https://image.tmdb.org/t/p/w300/';
//   }

//   getPopularFilms = () => this.instance.get('/discover/movie');

//   getPosterFilm = (posterPath) => axios.get(this.imageURL`${posterPath}`);
// }

// export const api = new API();
