import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { userLogin } from "../../store/user";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import stylesBtn from "../styles/Forms/Button.module.css";
import styles from "../styles/LoginForm.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state);
  const loading = token.loading || user.loading;
  const error = token.error | user.error;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.validate() && password.validate())
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
  };

  return (
    <section className="animeLeft">
      <Head title="Login" description="Página de login do usuário." />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos."} />
      </form>
      <Link className={styles.recuperar} to="/login/recuperar">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
