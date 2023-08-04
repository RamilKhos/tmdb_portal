import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPersonByIdQuery, useGetPersonMovieCreditsQuery } from '../../../api';

export const useDetailPagePerson = () => {
  const [rowsToShow, setRowsToShow] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: person,
    isLoading: isLoadGetPerson,
    isFetching: isFetchGetPerson,
  } = useGetPersonByIdQuery(id);

  const {
    data: moviePerson,
    isLoading: isLoadMovieCredits,
    isFetching: isFetchMovieCredits,
  } = useGetPersonMovieCreditsQuery(id);

  const isLoad = isLoadGetPerson || isLoadMovieCredits;
  const isFetch = isFetchGetPerson || isFetchMovieCredits;

  const btnBackHandler = () => {
    navigate('/person');
  };

  const handleShowAllRows = () => {
    if (showAll) {
      setRowsToShow(3);
    } else {
      setRowsToShow(moviePerson.length);
    }
    setShowAll(!showAll);
  };

  const buttonFilmHandler = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return {
    rowsToShow,
    person,
    moviePerson,
    isLoad,
    isFetch,
    btnBackHandler,
    handleShowAllRows,
    buttonFilmHandler,
  };
};
