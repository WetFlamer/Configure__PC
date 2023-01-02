import React from "react";
import { useState } from "react";
import styles from "./Authorization.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn, authSignUp } from "../../features/usersSlice";
import { useEffect } from "react";

const SignIn = () => {
  const [style, setStyle] = useState(styles.formBox);
  const [bgStyle, setBgStyle] = useState(styles.loginBlock);
  const error = useSelector((state) => state.users.error);
  const token = localStorage.getItem("token");
  const successfully = useSelector((state) => state.users.successfully);
  const loading = useSelector((state) => state.users.loading);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = () => {
    setStyle(styles.formBox);
    setBgStyle(styles.loginBlock);
  };
  const handleSignUp = () => {
    setStyle(styles.formBoxActive);
    setBgStyle(styles.loginBlockActive);
  };

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(authSignIn({ login, password }));
  };
  const handleRegister = async (e) => {
    await e.preventDefault();
    await dispatch(authSignUp({ login, password }));
  };

  useEffect(() => {
    if (successfully) {
      setStyle(styles.formBox);
    }
    if(token) {
      window.location.href = "/configurator";

    }
  }, [token, successfully]);

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
          <form onSubmit={handleLogin} action="#" className={styles.formSignIn}>
            <h3 className={styles.formTitle}>Вход</h3>

            <p>
              <input
                onChange={handleSetLogin}
                type="text"
                value={login}
                placeholder="Логин"
                className={styles.formInput}
              />
            </p>
            <p>
              <input
                onChange={handleSetPassword}
                type="password"
                value={password}
                placeholder="Пароль"
                className={styles.formInput}
              />
            </p>
            <p>
              <button type="submit" className={styles.formButton}>
                Войти
              </button>
            </p>
            <p className={styles.formForgot}>
              <a href="/" >
                Забыли пароль?
              </a>
            </p>
            <p className={styles.error}>
              {" "}
              {error ? (
                error
              ) : (
                <p className={styles.successfully}>{successfully}</p>
              )}
            </p>
            {loading ? (
              <div class={styles.loader}>
                <div class={styles.scanner}>
                  <span>Loading...</span>
                </div>
              </div>
            ) : null}
          </form>
          {/* Форма регистрации  */}
          <form
            onSubmit={handleRegister}
            action="#"
            className={styles.formSignUp}
          >
            <h3 className={styles.formTitle}>Регистрация</h3>

            <p>
              <input
                onChange={handleSetLogin}
                type="text"
                value={login}
                placeholder="Логин"
                className={styles.formInput}
              />
            </p>
            <p>
              <input
                onChange={handleSetPassword}
                type="password"
                value={password}
                placeholder="Пароль"
                className={styles.formInput}
              />
            </p>
            <p>
              <button type="submit" className={styles.formButton}>
                Зарегистрироваться
              </button>
            </p>
            {error ? <p className={styles.error}>{error}</p> : null}
          </form>
        </div>
      </article>
    </div>
  );
};

export default SignIn;
