import { Link, useNavigate } from "react-router-dom";

import logoSvg from "../../image/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLoginBoxLine } from "react-icons/ri";
import styles from "./header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { toggleSideMenu } from "../../redux/settings/slice";

const Header = () => {
  const isLoggIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuOpenHenlder = () => {
    dispatch(toggleSideMenu());
  };
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logoSvg} alt="Logo" className={styles.header__logo} />
      </Link>
      <div className={styles.header__iconContainer}>
        {isLoggIn ? (
          <div>
            <BiSearchAlt className={styles.header__icon} />
            <GiHamburgerMenu
              onClick={menuOpenHenlder}
              className={styles.header__icon}
            />
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
