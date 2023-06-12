import React from "react";
import styles from "../styles/Forms/Input.module.css";

const Input = ({ label, type, name }) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
        <input className={styles.input} type={type} name={name} id={name} />
      </label>
    </>
  );
};

export default Input;
