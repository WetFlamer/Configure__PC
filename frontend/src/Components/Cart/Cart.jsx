import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../features/usersSlice";
import styles from "./Cart.module.css";
import CartItems from "./CartItems";
const Cart = () => {
  const cart = useSelector((state) => state.users.cart);
  const dispatch = useDispatch();
const loading = useSelector((state) => state.users.loading);
  useEffect (() => {
    dispatch(fetchCart({userId: localStorage.getItem('id') }))
  }, [dispatch])
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.basket_start}>
          <p className={styles.basket_title}>Корзина</p>
         {loading ? <div className={styles.loader}></div> :  cart.length === 0 ? <h1 className={styles.basket_title}>Корзина пуста</h1> : cart.map((item) => { return ( <CartItems id={item} />)})}
          <h1 className={styles.globalPrice}>Общая стоимость:</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
