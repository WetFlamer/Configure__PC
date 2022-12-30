import React from "react";
import styles from "./Footer.module.css";
import whats from "../../images/icons/whats.png";
import inst from "../../images/icons/instagram.png";
import twitter from "../../images/icons/twitter.png";
import yt from "../../images/icons/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.wrapper_1}>
            <h5>г. Грозный, улица Трошева 7, ТД «Медина», 3 этаж, 1 кабинет</h5>
            <br />
            <p>Обработка и прием заказов по телефону:</p>
            <br />
            <h2>8 (800) 555 35 35</h2>
            <br />
            <p>
              Пн-Пт: 9:00 - 18:00 <br />
              Сб-Вс: 10:00 - 22:00
            </p>
          </div>
          <div className={styles.wrapper_2}></div>
        </div>
        <hr />
        <div className={styles.wrapper_3}>
          <div className={styles.social}>
            <a href="http://whatsapp.com">
              <img src={whats} alt="" />
            </a>
            <a href="http://instagram.com">
              <img src={inst} alt="" />
            </a>
            <a href="http://twitter.com">
              <img src={twitter} alt="" />
            </a>
            <a href="http://youtube.com">
              <img src={yt} alt="" />
            </a>
          </div>
          <div className={styles.copyright}>
            © 2020-2022 Matrix | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
