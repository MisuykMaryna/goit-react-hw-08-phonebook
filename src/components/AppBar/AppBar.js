import { useSelector } from 'react-redux';
import css from './AppBar.module.css';
import {Navigation} from 'components/Navigation/Navigation';
import {UserMenu} from 'components/UserMenu/UserMenu';
import {AuthNav} from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};