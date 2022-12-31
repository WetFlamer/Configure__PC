import React from "react";
import Categories from "./Categories/Categories";
import styles from './Assembler.module.css';

const Assembler = () => {
  return (
    <div className={styles.main}>
      <Categories />
    </div>
  )
}

export default Assembler;
