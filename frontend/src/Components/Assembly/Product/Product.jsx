import React from "react";
import Parts from "./Parts";
import styles from "./Product.module.css";

const Product = ({ ssd, name, processor, motherboard, ram, power, compCase, graphics, description, cost, image }) => {
  return (
    <div className={styles.productContainer}>
      <img
        className={styles.poster}
        src={`/assets/images/assembly/${image}`}
        alt=""
      />
      <div className={styles.title}>{name}</div>
      <div className={styles.price}>{cost} ₽</div>
      <button className={styles.buyButton}>Купить</button>
      <button className={styles.buttonMore}>Подробнее</button>
      <p className={styles.description}>{description}</p>
      <div className={styles.line}></div>
      <div className={styles.catalog}>
      <Parts ssd={ssd} graphics={graphics} processor={processor} ram={ram} motherboard={motherboard} power={power} compCase={compCase} />
      </div>
    </div>
  );
};

export default Product;
