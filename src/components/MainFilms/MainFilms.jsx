import { useState } from 'react';
import { Search } from '../Search/Search';
import { Films } from '../Films/Films';

export const MainFilms = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Films searchValue={searchValue} />
    </>
  );
};
