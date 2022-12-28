import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.logoText}>ATRIX</div>
      </div>
      <div className={styles.navigationBlock}>
      <Link className={styles.navigationButtonSelect} to="/">
          Главная
        </Link>
        <Link className={styles.navigationButton} to="/configure">
          Собрать
        </Link>
        <Link className={styles.navigationButton} to="/assembly">
          Сборки
        </Link>
        <Link className={styles.navigationButton} to="/about">
          О нас
        </Link>
      </div>
    </div>
  );
};

export default Header;
