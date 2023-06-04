import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import NotFoundPage from 'pages/NotFoundPage';


import css from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));


 const App = () => { 
   const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
   return (
    <div className={css.container}>
      {isRefreshing ? (
        <p className={css.info}>Refreshing user...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} /> } />
            <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} /> } />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} /> } />
               <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}
    
export default App;