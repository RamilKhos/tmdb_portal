/* eslint-disable camelcase */
import { Pagination } from '@mui/material';
import { PersonCard } from '../PersonCard/PersonCard';

export const PeopleAll = ({ allPeople, page, paginationHandler }) => {
  if (!allPeople) return null;
  const { results: people, total_pages } = allPeople;

  return (
    people && people.length > 1 ? (
      <>
        <div className="content__inner">
          {people.map((person) => <PersonCard person={person} key={person.id} />)}
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
      : <div className="no_content">No person</div>
  );
};
