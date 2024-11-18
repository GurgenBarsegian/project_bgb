<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/getProducts';
import ProductsContainer from '../../components/ProductsContainer';
import ChangeStateProducts from '../../components/ChangeStateProducts';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function AllProductsPage() {

  
  const allProductsState = useSelector(store => store.products);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getProducts), []);

  return (
    <div >
      <div className={s.breadCrumbs}>
          <Link to="/">Main Page</Link>
          <hr />
          <span>All products</span>
        </div>
      <h3 className={s.products}>All products:</h3>
      <div><ChangeStateProducts /></div>
      <ProductsContainer products={allProductsState}/>
    </div>
  )
}
=======

>>>>>>> fe11390c72764016f42d1b9c35eb708b0333b5d3
