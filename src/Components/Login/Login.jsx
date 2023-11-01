import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "../Helper/Loading";
import NotFound from "../NotFound";
import styles from "../styles/Login.module.css";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";

const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) return <Loading />;
  if (data) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="recuperar" element={<LoginLostPassword />} />
          <Route path="resetar" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
