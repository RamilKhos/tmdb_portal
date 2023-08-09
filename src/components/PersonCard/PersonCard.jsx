import { useNavigate } from 'react-router-dom';
import no_image from '../../assets/images/no_image.png';
import { POSTER_URL_W300 } from '../../tools/utils';

export const PersonCard = ({ person }) => {
  const navigate = useNavigate();

  const {
    name, profile_path, id,
  } = person;

  const clickBoxHandler = () => {
    navigate(`/person/${id}`);
  };

  return (
    <div className="card__wrapper">
      <button type="button" className="card__wrapper-btn" onClick={clickBoxHandler} aria-label="">
        <div className="card__poster">
          <img className="card__images" src={profile_path ? POSTER_URL_W300 + profile_path : no_image} alt="poster-films" />
        </div>
        <div className="card__title">{name}</div>
      </button>
    </div>
  );
};
