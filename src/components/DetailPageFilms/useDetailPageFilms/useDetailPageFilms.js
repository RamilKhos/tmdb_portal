import { useNavigate, useParams } from 'react-router-dom';
import { useGetFilmByIdQuery, useGetMoviePeopleQuery } from '../../../api';

export const useDetailPageFilms = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: movie, isLoading: isLoadGetFilm, isFetching: isFetchGetFilm, isError: isErrGetFilm,
  } = useGetFilmByIdQuery(id);
  const {
    data: actors, isLoading: isLoadGetPerson,
    isFetching: isFetchGetPerson, isError: isErrGetMoviePeopleQuery,
  } = useGetMoviePeopleQuery(id);

  const isLoad = isLoadGetFilm || isLoadGetPerson;
  const isFetch = isFetchGetFilm || isFetchGetPerson;
  const isError = isErrGetFilm || isErrGetMoviePeopleQuery;

  const btnBackHandler = () => {
    navigate(-1);
  };

  const btnPersonHandler = (personId) => {
    navigate(`/person/${personId}`);
  };

  return {
    movie,
    actors,
    isLoad,
    isFetch,
    isError,
    btnBackHandler,
    btnPersonHandler,
  };
};
