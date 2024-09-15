import { FC } from 'react';
import { useUserDataContext } from '../store';

export const HomePage: FC = () => {
  const { activeUser } = useUserDataContext();
  return (
    <div>
      Welcome <b>{activeUser}</b>
    </div>
  );
};
