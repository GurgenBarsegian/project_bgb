import React from "react";
import s from "./index.module.css";
import CategoryCardForPage from "../CategoryCardForPage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoriesContainerForPage({ categories}) {
 

  return (
    <div>
      <div className={s.breadCrumbs}>
        <Link to="/">Main Page</Link>
        <hr />
        <span>Categories</span>
      </div>
      <h1 className={s.title}>Categories</h1>
      <div className={s.categories_container}>
        {categories.map((el) => (
          <CategoryCardForPage key={el.id} {...el} categories={categories} />
        ))}
      </div>
    </div>
  );
}
