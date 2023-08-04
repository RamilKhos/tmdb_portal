import { CssTextField } from '../../tools/muiComponentsStyles';

export const FilmSearch = ({ searchValue, setSearchValue }) => {
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="search">
      <div className="search__inner">
        <div className="search__inner-description">
          <h2 className="search__title">Welcome.</h2>
          <h3 className="search__description">Millions of movies, series and people.</h3>
          <h3 className="search__description">Explore now.</h3>
        </div>
        <CssTextField
          value={searchValue}
          onChange={(e) => searchHandler(e)}
          sx={{ width: '100%' }}
          id="standard-basic"
          label="Search..."
          variant="standard"
        />
      </div>
    </section>
  );
};
