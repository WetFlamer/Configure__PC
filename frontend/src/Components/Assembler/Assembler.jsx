import React from "react";
import styles from "./Assembler.module.css";
import plataFon from "../../images/plataFon.jpg";
import Categories from "./Categories/Categories";

const Assembler = () => {
  return (
    <>
      <div className={styles.assembler}>
        <Categories />
        <div className="description">
          {/* <img src={plataFon} alt="fonplata" className={styles.plataFon} /> */}
        </div>
      </div>
    </>
    // <main>
    //     <Categories/>
    // </main>
  );
};

export default Assembler;
