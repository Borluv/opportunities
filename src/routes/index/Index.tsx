import CardList from './card-list/CardList';
import { useState, type FC } from 'react';
import SignInModal from './sign-in-modal/SignInModal';
import { isUserSignedIn } from '../../api/sessions';
import styles from './Index.module.scss';

const Index: FC = () => {
  const [modalVisibility, setModalVisibility] = useState(!isUserSignedIn());
  const closeModal = () => setModalVisibility(false);

  const handleClear = () => localStorage.removeItem('viewer');

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>Properties</h1>
        <button type="button" onClick={handleClear} className={styles.clear}>
          Clear
        </button>
      </header>
      <main className={styles.main}>
        <CardList />
        {modalVisibility && <SignInModal close={closeModal} />}
      </main>
    </>
  );
};

export default Index;
