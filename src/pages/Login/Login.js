import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
// import css from './Login.module.css';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;