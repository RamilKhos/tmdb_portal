import { useState } from 'react';
import { Header } from './components/Header/Header';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
    </div>
  );
};
