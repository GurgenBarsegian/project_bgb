import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/products';
import ProductsContainer from '../../components/ProductsContainer';
import ChangeStateProducts from '../../components/ChangeStateProducts';


export default function AllSalesPage() {

  const dispatch = useDispatch();

    useEffect(() => dispatch(getProducts), []);

    const allProductsState = useSelector(store => store.products);

    const {discont_price } =  allProductsState;

    const salesProducts = allProductsState.filter(el => el.discont_price !== null);


    console.log(salesProducts);
    


    return (
      <div>
        <h3>All products:</h3>
        <ChangeStateProducts />
        <ProductsContainer  products={salesProducts} />
      </div>
    )
}

