import { useDispatch, useSelector } from "react-redux";
import styles from "./SideMenu.module.scss";
import { selectUserId } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/thunk";
import { toggleSideMenu } from "../../redux/settings/slice";
const SideMenu = () => {
  const { sideMenu, sideMenu__box } = styles;
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
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
        <p>Hejka user</p>
        <ul>
          <li>Panel Użytkownika</li>
          <li>Koszyk</li>
          <li>Preferencje</li>
          <li
            onClick={(e) => {
              logOutHandler();
              closeMenuHandler(e);
            }}
          >
            Wyloguj
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideMenu;
