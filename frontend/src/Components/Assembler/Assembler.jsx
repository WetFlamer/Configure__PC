import React from "react";
import Categories from "./Categories/Categories";
import styles from "./Assembler.module.css";
import Accessories from "./Accessories/Accessories";
import Detail from "./Detail/Detail";
import Total from "./Total/Total";

const Assembler = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <Categories />
        <Accessories />
        <Detail />
        <Total />
      </div>
    </div>
  );
};

export default Assembler;
