import React, { useEffect } from "react";
import styles from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../../features/categoriesSlice";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.categoriesContainer}>
      {categories.map((item) => {
        return (

          <div className={styles.categoryItem} key={item._id}>

            <img className={styles.image} src={`/assets/images/${item.image_white}`} alt="" />
            <div className={styles.itemName}>{item.name}</div>
            
          </div>
        );
      })}
    </main>
  );
};

export default Categories;
