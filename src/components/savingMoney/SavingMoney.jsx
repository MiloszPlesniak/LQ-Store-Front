import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import savingMoneyIcon from "../../image/savingMoneyIcon.png";
import styles from "./savingMoney.module.scss";

const SavingMoney = () => {
  const { savingMoney, savingMoney__img, savingMoney__text } = styles;
  const user = useSelector(selectUser);
  return (
    <section>
      <div className={savingMoney}>
        <img
          src={savingMoneyIcon}
          alt="savingMoneyIcon"
          className={savingMoney__img}
        />
        <p className={savingMoney__text}>
          Dzieki zakupom u nas zaoszczędziłeś już{" "}
          <span>{user.moneySpend} zł</span>
        </p>
      </div>
    </section>
  );
}; // dorobić animacje pojawiania się elematu
export default SavingMoney;
