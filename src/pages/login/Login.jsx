import Baner from "../../components/Baner/Baner";
import EntryForm from "../../components/entryForm/EntryForm";

const Login = () => {
  const collectFormData = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const formData = {
      email,
      password,
    };
    console.log(formData);
    
    return formData
  };
  return (
    <>
      <Baner />
      <EntryForm itsLogin={true} onSubmit={collectFormData} />
    </>
  );
};
export default Login;
