import { useEffect } from 'react';
import { useGetAllPeopleQuery, useGetSearchPersonQuery } from '../../../api';
import { useDebounce } from '../../useDebounce/useDeboounce';

export const usePeople = (search, page, setPage) => {
  const debounceValue = useDebounce(search, 500);

  useEffect(() => {
    setPage(1);
  }, [debounceValue]);

  const {
    data: allPeople, isLoading: isLoadGetAllPeople,
    isFetching: isFetchGetAllPeople,
  } = useGetAllPeopleQuery(page);

  const {
    data: searchPerson, isLoading: isLoadSearchPerson,
    isFetching: isFetchSearchPerson,
  } = useGetSearchPersonQuery({ name: debounceValue, page });

  const isLoading = isLoadGetAllPeople || isLoadSearchPerson;
  const isFetching = isFetchGetAllPeople || isFetchSearchPerson;

  const paginationHandler = (e) => {
    setPage(+e.target.textContent);
  };

  return {
    page,
    allPeople,
    searchPerson,
    isLoading,
    isFetching,
    paginationHandler,
    debounceValue,
  };
};
