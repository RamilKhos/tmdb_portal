import { CssTextField } from '../../tools/muiComponentsStyles';
import { People } from '../People/People';
import styles from './styles.module.scss';
import { MainErrorScreen } from '../MainErrorScreen/MainErrorScreen';
import { usePeople } from '../People/usePeople/usePeople';

export const MainPeople = () => {
  const {
    isLoading,
    isFetching,
    isError,
    search,
    searchHandler,
    page,
    allPeople,
    searchPerson,
    paginationHandler,
    debounceValue,
  } = usePeople();

  if (isError) return <MainErrorScreen />;

  return (
    <section className={styles.peopleContainer}>
      <CssTextField
        value={search}
        onChange={(e) => searchHandler(e)}
        sx={{ width: '100%', marginBottom: '2rem' }}
        id="standard-basic"
        label="Search..."
        variant="standard"
      />

      <People
        page={page}
        allPeople={allPeople}
        searchPerson={searchPerson}
        paginationHandler={paginationHandler}
        debounceValue={debounceValue}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
      />
    </section>
  );
};
