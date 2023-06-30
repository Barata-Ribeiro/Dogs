import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm("password");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p>{key}</p>
      <p>{login}</p>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="passowrd" />
        <Button>Resetar</Button>
      </form>
    </div>
  );
};

export default LoginResetPassword;
