/* eslint-disable camelcase */
import { Pagination } from '@mui/material';
import { PersonCard } from '../PersonCard/PersonCard';

export const PersonSearch = ({
  searchPerson, page, paginationHandler,
}) => {
  const { results: allPeople, total_pages } = searchPerson;

  return (
    <div className="main">
      <section className="content">

        {allPeople && allPeople.length > 1 ? (
          <>
            <div className="content__inner">
              {allPeople.map((person) => <PersonCard person={person} key={person.id} />)}
            </div>

            <Pagination
              sx={{ display: 'flex', justifyContent: 'center' }}
              color="secondary"
              count={total_pages}
              page={page}
              onChange={(e) => paginationHandler(e)}
            />
          </>
        )

          : <div className="no_content">Nothing found for your request...</div>}

      </section>
    </div>
  );
};
