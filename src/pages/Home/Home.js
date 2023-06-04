import { Link } from 'react-router-dom';
import css from './Home.module.css';
 const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.home__form}>
        <div className={css.home__link}>
      <h1 className={css.title}>Wellcome to Your Contact</h1>
     <p>
              If you have not yet registered, please register{' '}
              {<Link to="/register"> Registration </Link>}
              or
              {<Link to="/login"> Login </Link>}
              if you already have an account.
            </p>
    </div>
    </div>
    </div>
  );
}

export default Home;