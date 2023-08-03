/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
import { Loader } from '../Loader/Loader';
import { usePeople } from './usePeople/usePeople';
import { PersonSearch } from '../PersonSearch/PersonSearch';
import { PeopleAll } from '../PeopleAll/PeopleAll';

export const People = ({ search, page, setPage }) => {
  const {
    allPeople,
    searchPerson,
    isLoading,
    isFetching,
    paginationHandler,
    debounceValue,
  } = usePeople(search, page, setPage);

  if (isLoading || isFetching) return <Loader />;

  return (
    <div className="main">
      <section className="content">
        {debounceValue !== ''
          ? (
            <PersonSearch
              searchPerson={searchPerson}
              page={page}
              paginationHandler={paginationHandler}
            />
          )
          : (
            <PeopleAll
              allPeople={allPeople}
              page={page}
              paginationHandler={paginationHandler}
            />
          )}
      </section>
    </div>
  );
};
