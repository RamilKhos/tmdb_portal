/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom';
import no_image from '../../assets/images/no_image.png';

const POSTER_URL = 'https://image.tmdb.org/t/p/w300';

export const FilmCard = ({ film }) => {
  const navigate = useNavigate();

  const {
    title, vote_average, release_date, poster_path, id,
  } = film;

  const clickBoxHandler = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="card__wrapper">
      <button type="button" className="card__wrapper-btn" onClick={clickBoxHandler} aria-label="">
        <div className="card__poster">
          <img className="card__images" src={poster_path ? POSTER_URL + poster_path : no_image} alt="poster-films" />
        </div>
        <div className="card__vote-average">{Math.round(vote_average * 10) / 10}</div>
        <div className="card__title">{title}</div>
        <div className="card__release">{release_date}</div>
      </button>
    </div>
  );
};
