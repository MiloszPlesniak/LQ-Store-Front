import { useDispatch } from "react-redux";
import Baner from "../../components/Baner/Baner";
import EntryForm from "../../components/entryForm/EntryForm";
import { loginUser } from "../../redux/auth/thunk";

const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const formData = {
      email,
      password,
    };
    console.log(formData);
    dispatch(loginUser(formData));
    return formData;
  };
  return (
    <>
      <Baner />
      <EntryForm itsLogin={true} onSubmit={loginHandler} />
    </>
  );
};
export default Login;
