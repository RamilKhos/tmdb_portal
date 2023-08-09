import { Pagination } from '@mui/material';
import { PersonCard } from '../PersonCard/PersonCard';
import useResize from '../../tools/customHooks/useResize/useResize';

export const PersonSearched = ({
  searchPerson, page, paginationHandler,
}) => {
  const [width] = useResize();
  const { results: allPeople, total_pages } = searchPerson;
  return (
    allPeople && allPeople.length > 1 ? (
      <>
        <div className="content__inner">
          {allPeople.map((person) => <PersonCard person={person} key={person.id} />)}
        </div>

        <Pagination
          sx={{ display: 'flex', justifyContent: 'center' }}
          color="secondary"
          count={total_pages}
          page={page}
          size={width > 500 ? 'medium' : 'small'}
          onChange={(e) => paginationHandler(e)}
        />
      </>
    )

      : <div className="no_content">Nothing found for your request...</div>
  );
};
