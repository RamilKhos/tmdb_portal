import { useNavigate, useParams } from 'react-router-dom';
import { useGetFilmByIdQuery, useGetMoviePeopleQuery } from '../../../api';

export const useDetailPageFilms = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: movie, isLoading, isFetching } = useGetFilmByIdQuery(id);
  const {
    data: actors, isLoading: isLoadGetActors,
    isFetching: isFetchGetActors,
  } = useGetMoviePeopleQuery(id);

  const isLoad = isLoading || isLoadGetActors;
  const isFetch = isFetching || isFetchGetActors;

  const btnBackHandler = () => {
    navigate('/');
  };

  const btnPersonHandler = (personId) => {
    navigate(`/person/${personId}`);
  };

  return {
    movie,
    actors,
    isLoad,
    isFetch,
    btnBackHandler,
    btnPersonHandler,
  };
};
