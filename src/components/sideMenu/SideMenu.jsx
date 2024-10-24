import { useDispatch, useSelector } from "react-redux";
import styles from "./SideMenu.module.scss";
import { selectUserId } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/thunk";
const SideMenu = () => {
  const { sideMenu, sideMenu__box } = styles;
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const logOutHandler = () => {
    dispatch(logOut(selectUserId));
  };

  return (
    <div className={sideMenu}>
      <div className={sideMenu__box}>
        <p>Hejka user</p>
        <ul>
          <li>Panel Użytkownika</li>
          <li>Koszyk</li>
          <li>Preferencje</li>
          <li onClick={logOutHandler}>Wyloguj</li>
        </ul>
      </div>
    </div>
  );
};
export default SideMenu;
