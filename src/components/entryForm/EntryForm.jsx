import styles from "./EntryForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/auth/selectors";
const EntryForm = ({ itsLogin, onSubmit }) => {
  const navigation = useNavigate();
  const {
    entryForm__title,
    entryForm__hint,
    entryForm__form,
    entryForm__label,
    entryForm__input,
    entryForm__button,
    entryForm__links,
  } = styles;

  const error = useSelector(selectError);
  return (
    <section className={styles.entryForm}>
      <h2 className={entryForm__title}>
        {itsLogin ? "Zaloguj" : "Zarejestruj"}
      </h2>
      <h4 className={entryForm__hint}>
        {itsLogin
          ? "Zaloguj się by kontynuować"
          : "Dołącz do nas aby przejsć dalej"}
      </h4>
      <form
        onSubmit={onSubmit}
        className={entryForm__form}
        name="entryForm_form"
      >
        <label className={entryForm__label} htmlFor="email">
          Nazwa Użytkownika
        </label>
        <input className={entryForm__input} type="email" name="email" />

        <label htmlFor="password" className={entryForm__label}>
          Hasło
        </label>
        <input className={entryForm__input} type="password" name="password" />
        {!itsLogin && (
          <>
            <label className={entryForm__label} htmlFor="phoneNumber">
              Numer telefonu
            </label>
            <input
              className={entryForm__input}
              type="number"
              name="phoneNumber"
            />
          </>
        )}
        {error && <p>{typeof error=="string"?error:error.message}</p>}
        <button className={entryForm__button} type="submit">
          {itsLogin ? "Zaloguj" : "Zarejestruj"}
        </button>
      </form>

      {itsLogin && (
        <>
          <p className={entryForm__links}>Przypomnij Hasło</p>
          <p
            onClick={() => {
              navigation("/register", { replace: true });
            }}
            className={entryForm__links}
          >
            Dołącz do nas
          </p>
        </>
      )}
      {!itsLogin && (
        <p
          onClick={() => {
            navigation("/login", { replace: true });
          }}
          className={entryForm__links}
        >
          Jesteś z nami? Zaloguj się
        </p>
      )}
    </section>
  );
};

export default EntryForm;
