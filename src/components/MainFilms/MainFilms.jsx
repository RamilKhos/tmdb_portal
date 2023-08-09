import { useState } from 'react';
import { Films } from '../Films/Films';
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen';
import { Loader } from '../Loader/Loader';
import { FilmSearch } from '../FilmSearch/FilmSearch';
import { useMainFilms } from './useMainFilms/useMainFilms';

export const MainFilms = () => {
  const [searchValue, setSearchValue] = useState('');

  const {
    debounceValue,
    page,
    searchFilms,
    activeBtn,
    paginationHandler,
    categoriesHandler,
    arrayHooks,
    isLoading,
    isFetching,
    isError,
  } = useMainFilms(searchValue);

  if (isLoading || isFetching) return <Loader />;
  if (isError) return <MainErrorScreen />;

  return (
    <>
      <FilmSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Films
        debounceValue={debounceValue}
        page={page}
        searchFilms={searchFilms}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        activeBtn={activeBtn}
        arrayHooks={arrayHooks}
        paginationHandler={paginationHandler}
        categoriesHandler={categoriesHandler}
      />
    </>
  );
};
