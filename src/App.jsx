import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

export const App = () => (
  <div className="container">
    <Header />
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </div>
);
