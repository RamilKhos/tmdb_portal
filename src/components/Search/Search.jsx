import { CssTextField } from '../../tools/muiComponentsStyles';

export const Search = () => (
  <section className="search">
    <div className="search__inner">
      <div className="search__inner-description">
        <h2 className="search__title">Добро пожаловать.</h2>
        <h3 className="search__description">Миллионы фильмов, сериалов и людей.</h3>
        <h3 className="search__description">Исследуйте сейчас.</h3>
      </div>
      <CssTextField sx={{ width: '100%', backgroundColor: '' }} id="standard-basic" label="Поиск..." variant="standard" />
    </div>
  </section>
);
