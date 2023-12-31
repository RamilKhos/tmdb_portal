export const POSTER_URL_W300 = 'https://image.tmdb.org/t/p/w300';
export const POSTER_URL_W92 = 'https://image.tmdb.org/t/p/w92';
export const BACKDROP_URL = 'https://image.tmdb.org/t/p/original';

export const pages = ['Films', 'People'];
export const categories = ['popular', 'now playing', 'top rating', 'upcoming'];

export const changeTotalPage = (response, countPages) => ({
  ...response,
  data: {
    ...response.data,
    total_pages: countPages,
  },
});

export const getFilms = (activeBtnCategories, dataFromDB) => {
  const [popularFilms, nowPlayingFilms, topRatingFilms, upcomingFilms] = dataFromDB;

  switch (activeBtnCategories) {
    case 'popular':
      return changeTotalPage(popularFilms, 500);
    case 'now playing':
      return nowPlayingFilms;
    case 'top rating':
      return changeTotalPage(topRatingFilms, 500);
    case 'upcoming':
      return upcomingFilms;
    default:
      return popularFilms;
  }
};
