import { useEffect, useState } from 'react';
import { CssTextField } from '../tools/muiComponentsStyles';
import { api } from '../../API';

export const Main = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api.getPopularFilms().then((data) => setFilms(data.data));
  }, []);

  //   const data = films === undefined ? films.results[0] : 12;
  console.log(films);

  return (
    <main className="main">

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

      <section className="content">
        <div className="content__inner">

          <div className="card__wrapper">
            <div className="card__poster">
              <img className="card__images" src="#" alt="poster-films" />
            </div>
            <div className="card__vote-average">6.7</div>
            <div className="card__title">The Flash</div>
            <div className="card__release">12.12.1992</div>
          </div>

        </div>
      </section>

    </main>
  );
};
