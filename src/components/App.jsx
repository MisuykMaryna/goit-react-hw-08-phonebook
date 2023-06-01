import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import  {Layout}  from 'components/Layout';
// import css from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));


export const App = () => { 
   <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      }
    
export default App;