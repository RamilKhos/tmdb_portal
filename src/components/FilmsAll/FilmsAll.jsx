import { Button, Pagination } from '@mui/material';
import { FilmCard } from '../FilmCard/FilmCard';
import { categories, getFilms } from '../../tools/utils';
import useResize from '../../tools/customHooks/useResize/useResize';

export const FilmsAll = ({
  page, activeBtn, arrayHooks,
  categoriesHandler, paginationHandler,
}) => {
  const { data } = getFilms(activeBtn, arrayHooks);
  const { results: films, total_pages: pages } = data;

  const [width] = useResize();

  const countingMarginRight = width > 515 ? '2rem' : 0;

  return (
    <section className="content">
      {films && films.length > 1 ? (
        <>
          <nav className="categories">
            {categories.map((category, i) => (
              <Button
                key={crypto.randomUUID()}
                value={category}
                sx={{
                  marginRight: i !== categories.length - 1 && countingMarginRight,
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
            size={width > 500 ? 'medium' : 'small'}
            onChange={(e) => paginationHandler(e)}
          />
        </>
      )

        : <div className="no_content">No content</div>}
    </section>
  );
};
