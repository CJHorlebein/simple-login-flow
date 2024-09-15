import { useState } from 'react';
import UserDataProvider from './store/UsersDataContext';
import { PageRouter, PageRoutes, PageSelector } from './components';

import styles from './App.module.css';

function App() {
  const [page, setPage] = useState<PageRoutes>('sign-in');
  return (
    <UserDataProvider>
      <div className={styles.appContainer}>
        {page !== 'home' ? (
          <PageSelector page={page} setPage={setPage} />
        ) : null}
        <PageRouter page={page} setPage={setPage} />
      </div>
    </UserDataProvider>
  );
}

export default App;
