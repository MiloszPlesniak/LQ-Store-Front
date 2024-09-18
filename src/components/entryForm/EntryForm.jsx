import styles from "./EntryForm.module.scss";

const EntryForm = ({ itsLogin, onSubmit }) => {
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
      <h2 className={login__title}>{itsLogin ? "Zaloguj" : "Zarejestruj"}</h2>
      <h4 className={login__hint}>
        {itsLogin
          ? "Zaloguj się by kontynuować"
          : "Dołącz do nas aby przejsć dalej"}
      </h4>
      <form onSubmit={onSubmit} className={login__form} name="login_form">
        <label className={login__label} htmlFor="email">
          Nazwa Użytkownika
        </label>
        <input className={login__input} type="email" name="email" />

        <label htmlFor="password" className={login__label}>
          Hasło
        </label>
        <input className={login__input} type="password" name="password" />
        {!itsLogin && (
          <>
            <label className={login__label} htmlFor="phoneNumber">
              Numer telefonu
            </label>
            <input className={login__input} type="number" name="phoneNumber" />
          </>
        )}
        <button className={login__button} type="submit">
          {itsLogin ? "Zaloguj" : "Zarejestruj"}
        </button>
      </form>
    </section>
  );
};

export default EntryForm;
