/* eslint-disable camelcase */
const POSTER_URL = 'https://image.tmdb.org/t/p/w300';

export const FilmCard = ({ film }) => {
  const {
    title, vote_average, release_date, poster_path,
  } = film;

  return (
    <div className="card__wrapper">
      <div className="card__poster">
        <img className="card__images" src={POSTER_URL + poster_path} alt="poster-films" />
      </div>
      <div className="card__vote-average">{vote_average}</div>
      <div className="card__title">{title}</div>
      <div className="card__release">{release_date}</div>
    </div>
  );
};
