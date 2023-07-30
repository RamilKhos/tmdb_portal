import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Search } from './components/Search/Search';

export const App = () => (
  <div className="container">
    <Header />
    <Search />
    <Main />
  </div>
);
