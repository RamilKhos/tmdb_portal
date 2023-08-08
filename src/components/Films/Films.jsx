import { Button, Pagination } from '@mui/material';
import { FilmCard } from '../FilmCard/FilmCard';
import { categories, getFilms } from '../../tools/utils';
import { useFilms } from './useFilms/useFilms';
import { Loader } from '../Loader/Loader';
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen';

export const Films = ({ searchValue }) => {
  const {
    page, activeBtn, paginationHandler, categoriesHandler, arrayHooks,
    debounceValue, searchFilms,
  } = useFilms(searchValue);

  if (debounceValue !== '') {
    const {
      data: { results: films, total_pages: pages }, isLoading, isFetching, isError,
    } = searchFilms;

    if (isLoading || isFetching) return <Loader />;
    if (isError) return <MainErrorScreen />;

    return (
      <main className="main">
        <section className="content">
          {films && films.length > 1 ? (
            <>
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
            : <div className="no_content">Nothing found for your request...</div>}
        </section>
      </main>
    );
  }

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
                    marginRight: i !== categories.length - 1 && '2rem',
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
