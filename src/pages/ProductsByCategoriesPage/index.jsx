import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategories } from "../../requests/getProducts";
import ProductsContainerForPage from "../../components/ProductsContainerForPage";
import { useParams } from "react-router-dom";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { getCategory } from "../../requests/categories";

export default function ProductsByCategoriesPage() {


  const { id } = useParams();

  const productsByCategoryState = useSelector(store => store.productsByCategory);
  const categoryState = useSelector(store => store.category);


  const dispatch = useDispatch();

  useEffect(() =>{
    if(id){ 
      dispatch(getProductsByCategories(id))
    }}, []); // get the all products of one category using category id, via fetch-request and dispatch

  console.log(productsByCategoryState);

  
  // Добавляем проверку на наличие продуктов перед доступом к categoryId
  //Add a check for the availability of products before granting access to the categoryId.
  const categoryId = productsByCategoryState.products?.[0]?.categoryId;

  useEffect(() => {
    if (categoryId) { // Проверяем, что categoryId определен Check that the categoryId is defined
      dispatch(getCategory(categoryId)); 
    }
  }, [categoryId, dispatch]);



  return (
    <div>
      <div className={s.breadCrumbs} >
              <Link to="/">Main Page</Link>
              <hr/>
              <Link to="/categories">Categories</Link>
              <hr/>
              <span>{categoryState.data.title}</span>
            </div>
      <ProductsContainerForPage products={productsByCategoryState} />
    </div>
  )
}
