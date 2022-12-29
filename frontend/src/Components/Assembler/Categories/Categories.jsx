import React, { useEffect } from "react";
import styles from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../../features/categoriesSlice";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
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
    <div>
      {categories.map((item) => {
        return (
          <div>
            <Link to={`category/${categories._id}`}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
