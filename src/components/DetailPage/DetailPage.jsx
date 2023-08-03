/* eslint-disable camelcase */
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useGetFilmByIdQuery, useGetMoviePeopleQuery } from '../../api';
import { Loader } from '../Loader/Loader';
import styles from './styles.module.scss';

const POSTER_URL = 'https://image.tmdb.org/t/p/w300';
const ACTOR_AVATAR_URL = 'https://image.tmdb.org/t/p/w92';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/original';

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: movie, isLoading, isFetching } = useGetFilmByIdQuery(id);
  const {
    data: actors, isLoading: isLoadGetActors,
    isFetching: isFetchGetActors,
  } = useGetMoviePeopleQuery(id);

  if (isLoading || isLoadGetActors || isFetching || isFetchGetActors) return <Loader />;

  const {
    backdrop_path, poster_path, genres, overview, release_date, tagline,
    title, vote_average,
  } = movie;

  const btnBackHandler = () => {
    navigate('/');
  };

  const filterActors = (array) => {
    const updateArray = array.filter((actor) => actor.profile_path !== null);
    return updateArray.map((item, i) => {
      if (i > 9) return null;
      return (
        <Tooltip title={item.name} key={i}>
          <img src={ACTOR_AVATAR_URL + item.profile_path} className={styles.actorImage} alt={`avatar+${i}`} />
        </Tooltip>
      );
    });
  };

  return (
    <div className={styles.movie_card}>
      <div className={styles.container}>

        <div className={styles.container_inner}>

          <div className={styles.posterContainer}>
            <div className={styles.voteAverage}>{Math.round(vote_average * 10) / 10}</div>
            <img src={POSTER_URL + poster_path} alt="poster" className={styles.poster} />
          </div>

          <div className={styles.content}>
            <div className={styles.details}>
              <div className={styles.title}>
                {title}
              </div>
              <div className={styles.tagline}>{tagline}</div>
            </div>

            <div className={styles.description}>
              <div className={styles.genre}>
                {genres.map((genre) => (
                  <span key={genre.id} className={styles.tag}>
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className={styles.overview}>
                <p>{overview}</p>
                <div className={styles.avatars}>
                  {(actors.cast && actors.cast.length > 1) && filterActors(actors.cast)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.backdrop_container}>
          <img src={BACKDROP_URL + backdrop_path} alt="backdrop" className={styles.backdrop} />
        </div>

        <IconButton
          onClick={btnBackHandler}
          aria-label="back"
          sx={{
            position: 'absolute', top: '0', left: '0', color: 'white',
          }}
          size="large"
        >
          <ArrowBackIcon />
        </IconButton>

      </div>
    </div>
  );
};
