import { useGetPopularFilmsQuery } from '../../API';
import { Loader } from '../Loader/Loader';
import { FilmCard } from '../FilmCard/FilmCard';

export const Main = () => {
  const { data, isLoading } = useGetPopularFilmsQuery();

  if (isLoading) return <Loader />;

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
