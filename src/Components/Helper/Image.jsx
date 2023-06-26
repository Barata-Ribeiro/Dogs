import React from "react";
import styles from "../styles/Image.module.css";

const Image = ({ alt, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
      <img className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
