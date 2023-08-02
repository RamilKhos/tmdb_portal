import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';

export const App = () => (
  <div className="container">
    <Header />
    <Outlet />
  </div>
);
