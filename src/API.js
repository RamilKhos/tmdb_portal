import axios from 'axios';
import { Component } from 'react';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODRiNmNiZjY0Y2QyMjM0YzkzMzFhZjEwNmQxODllMyIsInN1YiI6IjY0YzI0YTMxMWNmZTNhMGViNDI5YjYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S300Bkc2BidjY9F9z2Ty6B8glEEcCa_8ePhoL6KJ8Y0';
const API_KEY = '984b6cbf64cd2234c9331af106d189e3';

class API extends Component {
  constructor() {
    super();
    this.instance = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    this.imageURL = 'https://image.tmdb.org/t/p/w300/';
  }

  getPopularFilms = () => this.instance.get('/discover/movie');

  getPosterFilm = (posterPath) => axios.get(this.imageURL`${posterPath}`);
}

export const api = new API();
