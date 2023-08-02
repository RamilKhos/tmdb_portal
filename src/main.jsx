import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.css';
import { store } from './components/store/store';
import { DetailPage } from './components/DetailPage/DetailPage';
import { Main } from './components/Main/Main';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'movie/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={myRouter} />
    </Provider>
  </React.StrictMode>,
);
