import styles from "./userData.module.scss";
import changeBtnIcon from "../../image/changeBtnIcon.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import SavingMoney from "../savingMoney/SavingMoney";
const UserData = () => {
  const {
    userData,
    userData__title,
    userData__box,
    userData__btn,
    userData__item,
    userData__itemTitle,
  } = styles;
  const user = useSelector(selectUser);
  return (
    <div className={userData}>
      <h3 className={userData__title}>Tyle o tobie wiemy </h3>
      <div className={userData__box}>
        <ul>
          <li className={userData__item}>
            <span className={userData__itemTitle}>Adres e-mail:</span>
            <p>{user.email}</p>
          </li>
          <li className={userData__item}>
            <span className={userData__itemTitle}>Numer Telefonu:</span>
            <p>{user.phoneNumber}</p>
            <button className={userData__btn}>
              <img src={changeBtnIcon} alt="changeIcon" />
            </button>
          </li>
          <li className={userData__item}>
            <span className={userData__itemTitle}>Hasło:</span>
            <p>*********</p>
            <button className={userData__btn}>
              <img src={changeBtnIcon} alt="changeIcon" />
            </button>
          </li>
          <li className={userData__item}>
            <span className={userData__itemTitle}>Nazwa Użytkownika:</span>
            <p>{user.alias}</p>
            <button className={userData__btn}>
              <img src={changeBtnIcon} alt="changeIcon" />
            </button>
          </li>
        </ul>
      </div>
      {user.moneySpend > 0 && <SavingMoney />}
    </div>
  );
};
export default UserData;
