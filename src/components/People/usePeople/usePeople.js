import { useEffect, useState } from 'react';
import { useGetAllPeopleQuery, useGetSearchPersonQuery } from '../../../api';
import { useDebounce } from '../../../tools/useDebounce/useDeboounce';

export const usePeople = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const debounceValue = useDebounce(search, 500);

  useEffect(() => {
    setPage(1);
  }, [debounceValue]);

  const {
    data: allPeople, isLoading: isLoadGetAllPeople,
    isFetching: isFetchGetAllPeople, isError: isErrorGetAllPeople,
  } = useGetAllPeopleQuery(page);

  const {
    data: searchPerson, isLoading: isLoadSearchPerson,
    isFetching: isFetchSearchPerson, isError: isErrorSearchPerson,
  } = useGetSearchPersonQuery({ name: debounceValue, page });

  const isLoading = isLoadGetAllPeople || isLoadSearchPerson;
  const isFetching = isFetchGetAllPeople || isFetchSearchPerson;
  const isError = isErrorGetAllPeople || isErrorSearchPerson;

  const paginationHandler = (e) => {
    setPage(+e.target.textContent);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return {
    search,
    setSearch,
    page,
    allPeople,
    searchPerson,
    isLoading,
    isFetching,
    paginationHandler,
    debounceValue,
    isError,
    searchHandler,
  };
};
