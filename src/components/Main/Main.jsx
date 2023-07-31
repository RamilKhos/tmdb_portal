import Pagination from '@mui/material/Pagination';
import { Button } from '@mui/material';
import { Loader } from '../Loader/Loader';
import { FilmCard } from '../FilmCard/FilmCard';
import { useMain } from './useMain/useMain';
import { categories, getFilms } from '../../tools/utils';

export const Main = () => {
  const {
    page, activeBtn, paginationHandler, categoriesHandler, arrayHooks, isLoading, isFetching,
  } = useMain();

  if (isLoading || isFetching) return <Loader />;

  const { data } = getFilms(activeBtn, arrayHooks);
  const { results: films, total_pages: pages } = data;

  return (
    <main className="main">
      <section className="content">

        {films && films.length > 1 ? (
          <>
            <nav className="categories">
              {categories.map((category, i) => (
                <Button
                  key={crypto.randomUUID()}
                  value={category}
                  sx={{
                    marginRight: i !== categories.length - 1 && '3rem',
                    color: 'white',
                    border: activeBtn === category && '2px solid white',
                  }}
                  onClick={(e) => categoriesHandler(e)}
                >
                  {category}
                </Button>
              ))}
            </nav>

            <div className="content__inner">
              {films.map((film) => <FilmCard film={film} key={film.id} />)}
            </div>

            <Pagination
              sx={{ display: 'flex', justifyContent: 'center' }}
              color="secondary"
              count={pages}
              page={page}
              onChange={(e) => paginationHandler(e)}
            />
          </>
        )

          : <div className="no_content">No content</div>}

      </section>
    </main>
  );
};
