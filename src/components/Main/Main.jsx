import { useState } from 'react';
import { Search } from '../Search/Search';
import { Films } from '../Films/Films';

export const Main = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Films searchValue={searchValue} />
    </>
  );
};
