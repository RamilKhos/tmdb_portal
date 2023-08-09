import { FilmsSearched } from '../FilmsSearched/FilmsSearched';
import { FilmsAll } from '../FilmsAll/FilmsAll';

export const Films = ({
  debounceValue,
  page,
  searchFilms,
  activeBtn,
  arrayHooks,
  paginationHandler,
  categoriesHandler,
}) => (
  <main className="main">
    {debounceValue !== ''
      ? (
        <FilmsSearched
          page={page}
          paginationHandler={paginationHandler}
          searchFilms={searchFilms}
        />
      )
      : (
        <FilmsAll
          page={page}
          activeBtn={activeBtn}
          arrayHooks={arrayHooks}
          paginationHandler={paginationHandler}
          categoriesHandler={categoriesHandler}
        />
      )}
  </main>
);
