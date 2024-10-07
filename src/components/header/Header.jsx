import { useNavigate } from "react-router-dom";
import logoSvg from "../../image/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLoginBoxLine } from "react-icons/ri";
import styles from "./header.module.scss";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
const Header = () => {
  const isLoggIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logo" className={styles.header__logo} />
      {/* <nav className={styles.header__navigation}>d</nav> */}
      <div className={styles.header__iconContainer}>
        {isLoggIn ? (
          <div>
            <BiSearchAlt className={styles.header__icon} />
            <GiHamburgerMenu className={styles.header__icon} />
          </div>
        ) : (
          <RiLoginBoxLine
            onClick={() => {
              navigate("/login", { replace: true });
            }}
            className={styles.header__icon}
          />
        )}
      </div>
    </header>
  );
};
export default Header;
