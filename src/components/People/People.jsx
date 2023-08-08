import { PersonSearch } from '../PersonSearch/PersonSearch';
import { PeopleAll } from '../PeopleAll/PeopleAll';

export const People = ({
  page,
  allPeople,
  searchPerson,
  paginationHandler,
  debounceValue,
}) => (
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
