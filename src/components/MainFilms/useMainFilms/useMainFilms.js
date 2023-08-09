import { useEffect, useState } from 'react';
import { useDebounce } from '../../../tools/customHooks/useDebounce/useDeboounce';
import {
  useGetNowPlayingFilmsQuery,
  useGetPopularFilmsQuery, useGetSearchFilmsQuery,
  useGetTopRatingFilmsQuery, useGetUpcomingFilmsQuery,
} from '../../../api';

export const useMainFilms = (searchValue = '') => {
  const [page, setPage] = useState(1);
  const [activeBtn, setActiveBtn] = useState('popular');
  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    setPage(1);
  }, [debounceValue]);

  const popularFilms = useGetPopularFilmsQuery(page);
  const nowPlayingFilms = useGetNowPlayingFilmsQuery(page);
  const topRatingFilms = useGetTopRatingFilmsQuery(page);
  const upcomingFilms = useGetUpcomingFilmsQuery(page);

  const searchFilms = useGetSearchFilmsQuery({ searchValue: debounceValue, page });

  const arrayHooks = [popularFilms, nowPlayingFilms, topRatingFilms, upcomingFilms];

  const isLoading = popularFilms.isLoading || nowPlayingFilms.isLoading
      || topRatingFilms.isLoading || upcomingFilms.isLoading;

  const isFetching = popularFilms.isFetching || nowPlayingFilms.isFetching
      || topRatingFilms.isFetching || upcomingFilms.isFetching;

  const isError = popularFilms.isError || nowPlayingFilms.isError
    || topRatingFilms.isError || upcomingFilms.isError || searchFilms.isError;

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
    isError,
  };
};
