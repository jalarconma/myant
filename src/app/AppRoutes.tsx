import WelcomePage from './pages/welcome/Welcome.page';
import SignOutPage from './pages/sign-out/SignOut.page';
import HomePage from './pages/home/Home.page';
import { RouteObjectExt } from './models/RouteObjectExt';

export const privateRoutes: RouteObjectExt[] = [
  {
    path: '/home',
    element: <HomePage />,
    linkName: 'Home'
  },
];

export const publicRoutes: RouteObjectExt[] = [
  {
    path: '/welcome',
    element: <WelcomePage />,
    linkName: 'Welcome'
  },
  {
    path: '/sign-out',
    element: <SignOutPage />,
    linkName: 'Sign Out'
  },
];