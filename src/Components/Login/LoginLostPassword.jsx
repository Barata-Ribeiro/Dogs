import React from "react";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { PASSWORD_LOST } from "../../api-connection";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginLostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("recuperar", "resetar"),
      });
      const { json } = await request(url, options);
    }
  };

  return (
    <section className="animeLeft">
      <Head
        title="Perdeu a senha?"
        description="Caso tenha perdido sua senha, essa página é para recuperar a mesma."
      />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginLostPassword;
