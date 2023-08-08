/* eslint-disable camelcase */
import { IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Loader } from '../Loader/Loader';
import styles from './styles.module.scss';
import { useDetailPageFilms } from './useDetailPageFilms/useDetailPageFilms';
import { BACKDROP_URL, POSTER_URL_W300, POSTER_URL_W92 } from '../../tools/utils';
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen';

export const DetailPageFilms = () => {
  const {
    movie,
    actors,
    isLoad,
    isFetch,
    isError,
    btnBackHandler,
    btnPersonHandler,
  } = useDetailPageFilms();

  if (isLoad || isFetch) return <Loader />;
  if (isError) return <MainErrorScreen />;

  const {
    backdrop_path, poster_path, genres, overview, tagline,
    title, vote_average,
  } = movie;

  const filterActors = (array) => {
    const updateArray = array.filter((actor) => actor.profile_path !== null);
    return updateArray.map((item, i) => {
      if (i > 9) return null;
      return (
        <Tooltip title={item.name} key={item.id}>
          <button type="button" className={styles.avatarsImg} onClick={() => btnPersonHandler(item.id)}>
            <img
              src={POSTER_URL_W92 + item.profile_path}
              className={styles.actorImage}
              alt={`avatar+${i}`}
            />
          </button>
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
            <img src={POSTER_URL_W300 + poster_path} alt="poster" className={styles.poster} />
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
          {backdrop_path
            ? <img src={BACKDROP_URL + backdrop_path} alt="backdrop" className={styles.backdrop} />
            : null}
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
