import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Search } from './components/Search/Search';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container">
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Main searchValue={searchValue} />
    </div>
  );
};
