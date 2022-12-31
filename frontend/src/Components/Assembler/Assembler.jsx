import React from "react";
import Categories from "./Categories/Categories";
import styles from './Assembler.module.css';
import Accessories from "./Accessories/Accessories";

const Assembler = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <Categories />
        <Accessories />
      </div>

    </div>
  )
}

export default Assembler;
