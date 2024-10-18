import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/getProducts';
import ProductsContainer from '../../components/ProductsContainer';
import ChangeStateProducts from '../../components/ChangeStateProducts';

export default function AllProductsPage() {

  const allProductsState = useSelector(store => store.products);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getProducts), []);

  return (
    <div>
      <h3>All products:</h3>
      <ChangeStateProducts />
      <ProductsContainer products={allProductsState} />
    </div>
  )
}
