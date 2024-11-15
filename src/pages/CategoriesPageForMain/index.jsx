import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../requests/categories";
import CategoriesContainer from "../../components/CategoriesContainer";
import { useEffect } from "react";
import s from './index.module.css'

export default function CategoriesPageForMain() {
  const categoriesState = useSelector((store) => store.categories);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getCategories), []); //get all categories-names using fetch-request  

  return (
    <div className={s.category} >
      <CategoriesContainer categories={categoriesState} />
    </div>
  );
}
