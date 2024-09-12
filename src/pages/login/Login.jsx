import banerLogo from "../../image/tło z logo i lq.png";
import decorationLiquid from "../../image/glut.png";
import styles from "./login.module.scss";
import LoginForm from "../../components/loginForm/LoginForm";

const Login = () => {
  const { baner, baner__decLiquid,baner__logo } = styles;

  return (
    <>
      <section className={baner}>
        <img src={banerLogo} className={baner__logo} alt="logo"></img>
        <img
          src={decorationLiquid}
          alt="decoration"
          className={baner__decLiquid}
        ></img>
      </section>
      <LoginForm />
    </>
  );
};
export default Login;
