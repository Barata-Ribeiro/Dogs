import React from "react";
import Dogs from "../assets/dogs-footer.svg?react";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>2020 - {currentYear} &copy; Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
