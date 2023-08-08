/* eslint-disable camelcase */
import {
  Button, IconButton, ListItem,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Loader } from '../Loader/Loader';
import styles from './styles.module.scss';
import { useDetailPagePerson } from './useDetailPagePerson/useDetailPagePerson';
import { POSTER_URL_W300, POSTER_URL_W92 } from '../../tools/utils';
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen';

export const DetailPagePerson = () => {
  const {
    rowsToShow,
    person,
    moviePerson,
    isLoad,
    isFetch,
    isError,
    btnBackHandler,
    handleShowAllRows,
    buttonFilmHandler,
  } = useDetailPagePerson();

  if (isLoad || isFetch) return <Loader />;
  if (isError) return <MainErrorScreen />;

  const {
    biography, birthday, name, place_of_birth, profile_path,
  } = person;

  const movieCredits = moviePerson.cast.filter((item) => item.poster_path !== null);
  movieCredits.sort((b, a) => new Date(a.release_date) - new Date(b.release_date));

  return (
    <div className={styles.movie_card}>
      <div className={styles.container}>

        <div className={styles.container_inner}>

          <div className={styles.posterContainer}>
            <img src={POSTER_URL_W300 + profile_path} alt="poster" className={styles.poster} />
          </div>

          <div className={styles.content}>
            <div className={styles.details}>
              <div className={styles.title}>
                {name}
              </div>
              <div className={styles.birthday}>{birthday}</div>
              <div className={styles.place_of_birth}>{place_of_birth}</div>
            </div>

            <div className={styles.description}>
              <div className={styles.overview}>
                <p>{biography || 'No decription'}</p>
              </div>
            </div>
          </div>
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

        <h3>Filmography</h3>

        <div className={styles.listContainer}>
          <ul>
            {movieCredits.slice(0, rowsToShow).map((movie) => (
              <button type="button" key={movie.id} onClick={() => buttonFilmHandler(movie.id)}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #A9A8A3',
                  }}
                >
                  <div className={styles.list}>
                    <img src={POSTER_URL_W92 + movie.poster_path} alt="poster_movie" />
                    <div>
                      <h2>{movie.title}</h2>
                      <p>{movie.character}</p>
                    </div>
                  </div>
                  <p className={styles.releaseDate}>{movie.release_date}</p>
                </ListItem>
              </button>
            ))}
          </ul>
          <Button onClick={handleShowAllRows} sx={{ border: '2px solid grey', color: 'grey' }}>
            {rowsToShow <= 3 ? 'See all' : 'Collapse All' }
          </Button>
        </div>

      </div>
    </div>
  );
};
