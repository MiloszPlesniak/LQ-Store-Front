import logoSvg from "../../image/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLoginBoxLine } from "react-icons/ri";
import styles from "./header.module.scss";
const Header = () => {
  const isLoggIn = false;

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
          <RiLoginBoxLine className={styles.header__icon} />
        )}
      </div>
    </header>
  );
};
export default Header;
