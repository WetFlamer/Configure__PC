import React from "react";
import styles from "./Authorization.module.css";

const SignIn = () => {
  return (
    <div className={styles.loginBlock}>
      {/* Контейнер */}
      <article className={styles.container}>
        {/* Внутренний блок */}
        <div className={styles.block}>
          <section className={styles.block__item}>
            <h2 className={styles.blockTitle}>У вас уже есть аккаунт?</h2>
            <button className={styles.blockButton}>Войти</button>
          </section>
          <section className={styles.block__item}>
            {" "}
            <h2 className={styles.blockTitle}>У вас нет аккаунта?</h2>
            <button className={styles.blockButton}>Зарегистрироваться</button>{" "}
          </section>
        </div>
      </article>
    </div>
  );
};

export default SignIn;
