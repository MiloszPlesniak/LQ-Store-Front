import { Outlet } from "react-router-dom";
// import styles from "./AccountPage.module.scss";

const AccountPage = () => {
  return (
    <main>
      <h1>Konto</h1>
      <Outlet />
    </main>
  );
};
export default AccountPage;
