import styles from "./buyScreen.module.scss";
import { FaCheck } from "react-icons/fa";

const BuyScreen = () => {
  const { buyScreen,overlay } = styles;
  return (
    <div className={overlay}>
      <div className={buyScreen}>
        <FaCheck size={"70%"} />
        <p>Dziekujemy za zaufanie !</p>
      </div>
    </div>
  );
};

export default BuyScreen;
