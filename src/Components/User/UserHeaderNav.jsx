import React from "react";
import { UserContext } from "../../UserContext";
import { NavLink } from "react-router-dom";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatísticas</NavLink>
      <NavLink to="/conta/postar">Adicionar Foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
