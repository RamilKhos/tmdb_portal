import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useGetPopularFilmsQuery } from '../../API';
import { Loader } from '../Loader/Loader';
import { FilmCard } from '../FilmCard/FilmCard';

export const Main = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPopularFilmsQuery(page);

  if (isLoading) return <Loader />;

  const paginationHandler = (value) => {
    setPage(value);
  };

  const { results: popularFilms } = data;

  return (
    <main className="main">
      <section className="content">
        <div className="content__inner">

          {popularFilms
            ? popularFilms.map((film) => <FilmCard film={film} key={film.id} />)
            : <div>No content</div>}

        </div>
      </section>
    </main>
  );
};
