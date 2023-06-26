import React from "react";
import styles from "../styles/PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  return (
    <>
      <button className={styles.delete}>Deletar</button>
    </>
  );
};

export default PhotoDelete;