import Baner from "../../components/Baner/Baner";
import EntryForm from "../../components/entryForm/EntryForm";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/thunk";
const Register = () => {
  const dispatch = useDispatch();
  const collectFormData = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const phoneNumber = form.elements.phoneNumber.value;
    const formData = { email, password, phoneNumber };
    console.log(formData);
    dispatch(registerUser(formData));
    return formData;
  };

  return (
    <>
      <Baner />
      <EntryForm itsLogin={false} onSubmit={collectFormData} />
    </>
  );
};
export default Register;
