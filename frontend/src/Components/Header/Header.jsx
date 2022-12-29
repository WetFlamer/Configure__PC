import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.logoText}>ATRIX</div>
      </div>
      <div className={styles.navigationBlock}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/configure"
        >
          Собрать
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/assembly"
        >
          Сборки
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/about"
        >
          О нас
        </NavLink>
      </div>
      <div className={styles.loginBlock}>
        <button className={styles.loginButton}>Войти</button>
      </div>
    </div>
  );
};

export default Header;
