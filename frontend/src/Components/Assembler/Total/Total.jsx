import React from "react";
import styles from "./Total.module.css";

const Total = () => {
  return (
    <div className={styles.container}>
      <div className={styles.costBox}>
        <p>Общая стоимость: ₽</p>
      </div>
      <div className={styles.cartBox}>
        <button>В корзину</button>
      </div>
    </div>
  );
};

export default Total;
