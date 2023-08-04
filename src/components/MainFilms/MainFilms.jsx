import { useState } from 'react';
import { FilmSearch } from '../FilmSearch/FilmSearch';
import { Films } from '../Films/Films';

export const MainFilms = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <FilmSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Films searchValue={searchValue} />
    </>
  );
};
