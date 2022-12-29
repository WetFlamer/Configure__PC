import React from "react";
import { useState } from "react";
import styles from "./Authorization.module.css";

const SignIn = () => {
  const [style, setStyle] = useState(styles.formBox);
  const [bgStyle, setBgStyle] = useState(styles.loginBlock);
  const handleSignIn = () => {
    setStyle(styles.formBox);
    setBgStyle(styles.loginBlock);
  };
  const handleSignUp = () => {
    setStyle(styles.formBoxActive);
    setBgStyle(styles.loginBlockActive);
  };

  return (
    <div className={bgStyle}>
      {/* Контейнер */}
      <article className={styles.container}>
        {/* Внутренний блок */}
        <div className={styles.block}>
          <section className={styles.blockItem}>
            <h2 className={styles.blockTitle}>У вас уже есть аккаунт?</h2>
            <button onClick={handleSignIn} className={styles.blockButton}>
              Войти
            </button>
          </section>
          <section className={styles.blockItem}>
            {" "}
            <h2 className={styles.blockTitle}>У вас нет аккаунта?</h2>
            <button onClick={handleSignUp} className={styles.blockButton}>
              Зарегистрироваться
            </button>{" "}
          </section>
        </div>

        <div className={style}>

            {/* Форма входа */}
          <form action="#" className={styles.formSignIn}>
            <h3 className={styles.formTitle}>Вход</h3>

            <p>
              <input
                type="text"
                name="login"
                id="1"
                placeholder="Логин"
                className={styles.formInput}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                id="2"
                placeholder="Пароль"
                className={styles.formInput}
              />
            </p>
            <p>
              <button className={styles.formButton}>Войти</button>
            </p>
            <p>
              <a href="/" className={styles.formForgot}>
                Восстановить пароль
              </a>
            </p>
          </form>
          {/* Форма регистрации  */}
          <form action="#" className={styles.formSignUp}>
            <h3 className={styles.formTitle}>Регистрации</h3>

            <p>
              <input
                type="text"
                name="login"
                id="1"
                placeholder="Логин"
                className={styles.formInput}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                id="2"
                placeholder="Пароль"
                className={styles.formInput}
              />
            </p>
            <p>
              <button className={styles.formButton}>Зарегистрироваться</button>
            </p>
         
          </form>
          
        </div>
      </article>
    </div>
  );
};

export default SignIn;
