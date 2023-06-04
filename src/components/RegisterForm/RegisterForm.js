import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.register__section}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2>Please enter Name, Email and Password</h2>
      <label className={css.label}>
        <input className={css.input} type="text" name="name" placeholder="username"/>
      </label>
      <label className={css.label}>
        <input className={css.input} type="email" name="email" placeholder="e-mail" />
      </label>
      <label className={css.label}>
        <input className={css.input} type="password" name="password" placeholder="password" />
      </label>
      <button className={css.register__button}type="submit">Register</button>
      </form>
      </div>
  );
};