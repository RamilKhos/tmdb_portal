import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPersonByIdQuery, useGetPersonMovieCreditsQuery } from '../../../api';

export const useDetailPagePerson = () => {
  const [rowsToShow, setRowsToShow] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: person,
    isLoading: isLoadGetPerson,
    isFetching: isFetchGetPerson,
    isError: isErrGetPerson,
  } = useGetPersonByIdQuery(id);

  const {
    data: moviePerson,
    isLoading: isLoadMovieCredits,
    isFetching: isFetchMovieCredits,
    isError: isErrMovieCredits,
  } = useGetPersonMovieCreditsQuery(id);

  const isLoad = isLoadGetPerson || isLoadMovieCredits;
  const isFetch = isFetchGetPerson || isFetchMovieCredits;
  const isError = isErrGetPerson || isErrMovieCredits;

  const btnBackHandler = () => {
    navigate(-1);
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
    isError,
    btnBackHandler,
    handleShowAllRows,
    buttonFilmHandler,
  };
};
