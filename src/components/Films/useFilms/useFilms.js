import { useState } from 'react';
import { useDebounce } from '../../../tools/useDebounce/useDeboounce';
import {
  useGetNowPlayingFilmsQuery,
  useGetPopularFilmsQuery, useGetSearchFilmsQuery,
  useGetTopRatingFilmsQuery, useGetUpcomingFilmsQuery,
} from '../../../api';

export const useFilms = (searchValue) => {
  const [page, setPage] = useState(1);
  const [activeBtn, setActiveBtn] = useState('popular');
  const debounceValue = useDebounce(searchValue, 500);

  const popularFilms = useGetPopularFilmsQuery(page);
  const nowPlayingFilms = useGetNowPlayingFilmsQuery(page);
  const topRatingFilms = useGetTopRatingFilmsQuery(page);
  const upcomingFilms = useGetUpcomingFilmsQuery(page);

  const searchFilms = useGetSearchFilmsQuery({ searchValue: debounceValue, page });

  const arrayHooks = [popularFilms, nowPlayingFilms, topRatingFilms, upcomingFilms];

  const isLoading = popularFilms.isLoading || nowPlayingFilms.isLoading
      || topRatingFilms.isLoading || upcomingFilms.isLoading || searchFilms.isLoading;

  const isFetching = popularFilms.isFetching || nowPlayingFilms.isFetching
      || topRatingFilms.isFetching || upcomingFilms.isFetching || searchFilms.isFetching;

  const paginationHandler = (e) => {
    setPage(+e.target.textContent);
  };

  const categoriesHandler = (e) => {
    setActiveBtn(e.target.value);
    setPage(1);
  };

  return {
    debounceValue,
    searchFilms,
    page,
    activeBtn,
    paginationHandler,
    categoriesHandler,
    arrayHooks,
    isLoading,
    isFetching,
  };
};
