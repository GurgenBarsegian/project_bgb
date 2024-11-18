<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/getProducts';
import ProductsContainer from '../../components/ProductsContainer';
import ChangeStateProducts from '../../components/ChangeStateProducts';
import s from './index.module.css'

export default function AllSalesPage() {

  const dispatch = useDispatch();

    useEffect(() => dispatch(getProducts), []);

    const allProductsState = useSelector(store => store.products);

    const {discont_price } =  allProductsState;

    const salesProducts = allProductsState.filter(el => el.discont_price !== null);


    console.log(salesProducts);
    


    return (
      <div className={s.sale}>
        <h3>Discounted items:</h3>
        
        <ProductsContainer  products={salesProducts} />
      </div>
    )
}

=======

>>>>>>> fe11390c72764016f42d1b9c35eb708b0333b5d3
