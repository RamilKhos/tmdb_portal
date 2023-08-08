import { useState } from 'react';
import { FilmSearch } from '../FilmSearch/FilmSearch';
import { Films } from '../Films/Films';
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen';
import { useFilms } from '../Films/useFilms/useFilms';
import { Loader } from '../Loader/Loader';

export const MainFilms = () => {
  const [searchValue, setSearchValue] = useState('');
  const { isError, isLoading, isFetching } = useFilms();

  if (isLoading || isFetching) return <Loader />;
  if (isError) return <MainErrorScreen />;

  return (
    <>
      <FilmSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Films searchValue={searchValue} />
    </>
  );
};
