import React from "react";
import { useSelector } from "react-redux";
import styles from "./Total.module.css";

const Total = () => {
  const configure = useSelector((state) => state.configures.configureObj2)
  console.log({configure});
  return (
    <div className={styles.container}>
      <div className={styles.costBox}>
        <p>Общая стоимость: {configure.cost}₽</p>
      </div>
      <div className={styles.cartBox}>
        <button>В корзину</button>
      </div>
    </div>
  );
};

export default Total;
