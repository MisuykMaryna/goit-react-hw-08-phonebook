import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.login__section}>
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.title}>Please enter Email and Password</h2>
      <label className={css.label}>
        <input className={css.input} type="email" name="email" placeholder="e-mail" />
      </label>
      <label className={css.label}>
        <input className={css.input} type="password" name="password" placeholder="password"/>
      </label>
      <button className={css.login__button} type="submit">Log In</button>
      </form>
      </div>
  );
};
