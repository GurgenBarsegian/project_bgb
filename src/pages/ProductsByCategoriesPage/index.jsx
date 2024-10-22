import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategories } from '../../requests/getProducts';
import ProductsContainerForPage from '../../components/ProductsContainerForPage';
import { useParams } from 'react-router-dom';

export default function ProductsByCategoriesPage() {

const {id} = useParams();

    const productsByCategoryState = useSelector(store => store.productsByCategory);

    const dispatch = useDispatch();

    useEffect(()=> dispatch(getProductsByCategories(id)), []);

  
console.log( productsByCategoryState);
    
  return (

    <div>
        <ProductsContainerForPage products={productsByCategoryState}/>
    </div>
  )
}
