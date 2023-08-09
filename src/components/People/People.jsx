import { PersonSearched } from '../PersonSearched/PersonSearched';
import { PeopleAll } from '../PeopleAll/PeopleAll';
import { Loader } from '../Loader/Loader';

export const People = ({
  page,
  allPeople,
  searchPerson,
  paginationHandler,
  debounceValue,
  isLoading,
  isFetching,
}) => {
  if (isLoading || isFetching) return <Loader />;

  return (
    <div className="main">
      <section className="content">
        {debounceValue !== ''
          ? (
            <PersonSearched
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
