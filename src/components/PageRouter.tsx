import { FC } from 'react';
import { RegisterForm } from '../pages/RegisterForm';
import { HomePage, SignInForm } from '../pages';

export const PageRouteOptions = ['register', 'sign-in', 'home'] as const;
export type PageRoutes = (typeof PageRouteOptions)[number];
interface PageRouterProps {
  page: PageRoutes;
  setPage: (page: PageRoutes) => void;
}
export const PageRouter: FC<PageRouterProps> = ({ page, setPage }) => {
  switch (page) {
    case 'register':
      return <RegisterForm handleRedirectUser={() => setPage('sign-in')} />;
    case 'home':
      return <HomePage />;
    case 'sign-in':
    default:
      return <SignInForm handleRedirectUser={() => setPage('home')} />;
  }
};
