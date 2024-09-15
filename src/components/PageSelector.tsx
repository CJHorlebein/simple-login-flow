import { FC } from 'react';
import { PageRoutes } from './PageRouter';
import { Button } from './Button';

import styles from './PageSelector.module.css';

const navOptions = ['register', 'sign-in'] as const;
interface PageSelectorProps {
  page: PageRoutes;
  setPage: (value: PageRoutes) => void;
}

export const PageSelector: FC<PageSelectorProps> = ({ setPage, page }) => {
  return (
    <div className={styles.pageSelectorContainer}>
      {navOptions.map((navLink) => (
        <Button
          key={navLink}
          content={navLink}
          onClick={() => setPage(navLink)}
          className={navLink === page ? styles.activeLink : ''}
        />
      ))}
    </div>
  );
};
