import { useState } from 'react';
import {
  useGetNowPlayingFilmsQuery,
  useGetPopularFilmsQuery,
  useGetTopRatingFilmsQuery,
  useGetUpcomingFilmsQuery,
} from '../../../API';

export const useMain = () => {
  const [page, setPage] = useState(1);
  const [activeBtn, setActiveBtn] = useState('popular');

  const popularFilms = useGetPopularFilmsQuery(page);
  const nowPlayingFilms = useGetNowPlayingFilmsQuery(page);
  const topRatingFilms = useGetTopRatingFilmsQuery(page);
  const upcomingFilms = useGetUpcomingFilmsQuery(page);

  const arrayHooks = [popularFilms, nowPlayingFilms, topRatingFilms, upcomingFilms];

  const isLoading = popularFilms.isLoading || nowPlayingFilms.isLoading
    || topRatingFilms.isLoading || upcomingFilms.isLoading;

  const isFetching = popularFilms.isFetching || nowPlayingFilms.isFetching
    || topRatingFilms.isFetching || upcomingFilms.isFetching;

  const paginationHandler = (e) => {
    setPage(+e.target.textContent);
  };

  const categoriesHandler = (e) => {
    setActiveBtn(e.target.value);
    setPage(1);
  };

  return {
    page,
    activeBtn,
    paginationHandler,
    categoriesHandler,
    arrayHooks,
    isLoading,
    isFetching,
  };
};
