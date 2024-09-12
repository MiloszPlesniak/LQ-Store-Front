import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const {
    login,
    login__title,
    login__hint,
    login__form,
    login__label,
    login__input,
    login__button,
  } = styles;
  return (
    <section className={login}>
      <h2 className={login__title}>Login</h2>
      <h4 className={login__hint}>Zaloguj się by kontynuować</h4>
      <form className={login__form} name="login_form">
        <label className={login__label} for="login">
          Nazwa Użytkownika
        </label>
        <input className={login__input} type="text" name="login" />

        <label for="password" className={login__label}>
          Hasło
        </label>
        <input className={login__input} type="password" name="password" />

        <button className={login__button} type="submit">
          Zaloguj
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
