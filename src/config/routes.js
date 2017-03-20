// @flow
import App from '../components/app/App';
import Bookmarks from '../components/bookmarks/Bookmarks';
import SignUp from '../components/signUp/SignUp';

export default [
  {
    path: '/',
    title: 'Home',
    component: App
  },
  {
    path: '/bookmarks',
    title: 'Bookmarks',
    component: Bookmarks
  },
  {
    path: '/signup',
    title: 'Sign Up',
    component: SignUp
  }
];
