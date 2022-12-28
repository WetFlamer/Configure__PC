import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
const [style, setStyles] = useState(styles.navigationButtonSelect)
const [style2, setStyles2] = useState(styles.navigationButton)
const [style3, setStyles3] = useState(styles.navigationButton)
const [style4, setStyles4] = useState(styles.navigationButton)

const handleStyleSelect = () => {
    setStyles(styles.navigationButtonSelect)
    setStyles2(styles.navigationButton)
    setStyles3(styles.navigationButton)
    setStyles4(styles.navigationButton)
}
const handleStyleSelect2 = () => {
  setStyles(styles.navigationButton)
  setStyles2(styles.navigationButtonSelect)
  setStyles3(styles.navigationButton)
  setStyles4(styles.navigationButton)
}
const handleStyleSelect3 = () => {
  setStyles(styles.navigationButton)
  setStyles2(styles.navigationButton)
  setStyles3(styles.navigationButtonSelect)
  setStyles4(styles.navigationButton)
}
const handleStyleSelect4 = () => {
  setStyles(styles.navigationButton)
  setStyles2(styles.navigationButton)
  setStyles3(styles.navigationButton)
  setStyles4(styles.navigationButtonSelect)
}


  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.logoText}>ATRIX</div>
      </div>
      <div className={styles.navigationBlock}>
      <Link onClick={handleStyleSelect} className={style} to="/">
          Главная
        </Link>
        <Link onClick={handleStyleSelect2} className={style2} to="/configure">
          Собрать
        </Link>
        <Link onClick={handleStyleSelect3} className={style3} to="/assembly">
          Сборки
        </Link>
        <Link onClick={handleStyleSelect4} className={style4} to="/about">
          О нас
        </Link>
      </div>
      <div className={styles.loginBlock}>
        <button className={styles.loginButton}>Войти</button>
      </div>
    </div>
  );
};

export default Header;
