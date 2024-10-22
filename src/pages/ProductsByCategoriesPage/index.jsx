import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategories } from '../../requests/getProducts';
import ProductsContainerForPage from '../../components/ProductsContainerForPage';

export default function ProductsByCategoriesPage() {

    const productsByCategoryState = useSelector(store => store.productsByCategory);
    const dispatch = useDispatch();

    useEffect(()=> dispatch(getProductsByCategories()), [])
    
  return (

    <div>
        <ProductsContainerForPage oneCategory = {productsByCategoryState} />
    </div>
  )
}
