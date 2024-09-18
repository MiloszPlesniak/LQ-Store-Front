import styles from "./Baner.module.scss";
import banerLogo from "../../image/tło z logo i lq.png";
import decorationLiquid from "../../image/glut.png";

const Baner = () => {
  const { baner, baner__decLiquid, baner__logo } = styles;
  return (
    <section className={baner}>
      <img src={banerLogo} className={baner__logo} alt="logo"></img>
      <img
        src={decorationLiquid}
        alt="decoration"
        className={baner__decLiquid}
      ></img>
    </section>
  );
};

export default Baner
