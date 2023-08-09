import { Pagination } from '@mui/material';
import { FilmCard } from '../FilmCard/FilmCard';
import { Loader } from '../Loader/Loader';
import useResize from '../../tools/customHooks/useResize/useResize';

export const FilmsSearched = ({ searchFilms, page, paginationHandler }) => {
  const {
    data: { results: films, total_pages: pages }, isLoading, isFetching,
  } = searchFilms;

  const [width] = useResize();

  if (isLoading || isFetching) return <Loader />;

  return (
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
            size={width > 500 ? 'medium' : 'small'}
            onChange={(e) => paginationHandler(e)}
          />
        </>
      )
        : <div className="no_content">Nothing found for your request...</div>}
    </section>
  );
};
