import { useState } from 'react';
import { CssTextField } from '../../tools/muiComponentsStyles';
import { People } from '../People/People';
import styles from './styles.module.scss';

export const MainPeople = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

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

      <People search={search} page={page} setPage={setPage} />
    </section>
  );
};
