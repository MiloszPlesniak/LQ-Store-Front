import { useDispatch, useSelector } from "react-redux";
import styles from "./SideMenu.module.scss";
import { selectUser, selectUserId } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/thunk";
import { IoIosArrowForward } from "react-icons/io";
import { toggleSideMenu } from "../../redux/settings/slice";
const SideMenu = () => {
  const {
    sideMenu,
    sideMenu__box,
    sideMenu__header,
    sideMenu__welcome,
    sideMenu__item,
    sideMenu__list,
    sideMenu__logOutBtn,
    sideMenu__menuCloseBtn,
  } = styles;
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const nickname = useSelector(selectUser).alias;
  const logOutHandler = () => {
    dispatch(logOut(userId));
  };
  const closeMenuHandler = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleSideMenu());
    }
  };
  return (
    <div onClick={closeMenuHandler} className={sideMenu}>
      <div className={sideMenu__box}>
        <div className={sideMenu__header}>
          <p className={sideMenu__welcome}>Cześć {nickname} 👋</p>
          <button className={sideMenu__menuCloseBtn} onClick={closeMenuHandler}>
            X
          </button>
        </div>

        <ul className={sideMenu__list}>
          <li className={sideMenu__item}>
            <p>Twoje Konto</p> <IoIosArrowForward />
          </li>
          <li className={sideMenu__item}>
            <p>Zamówienia</p> <IoIosArrowForward />
          </li>
          <li className={sideMenu__item}>
            <p>Dane klienta</p> <IoIosArrowForward />
          </li>
          <li className={sideMenu__item}>
            <p>Preferencje</p> <IoIosArrowForward />
          </li>
          <li className={sideMenu__item}>
            <p>FAQ</p> <IoIosArrowForward />
          </li>
          <li className={sideMenu__item}>
            <p>Koszyk</p> <IoIosArrowForward />
          </li>
        </ul>
        <button
          className={sideMenu__logOutBtn}
          onClick={(e) => {
            logOutHandler();
            closeMenuHandler(e);
          }}
        >
          Wyloguj się
        </button>
      </div>
    </div>
  );
};
export default SideMenu;
