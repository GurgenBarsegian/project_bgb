import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/getProducts';
import ProductsContainer from '../../components/ProductsContainer';
import ChangeStateProducts from '../../components/ChangeStateProducts';
import s from './index.module.css'

export default function AllProductsPage() {

  return (
    <div >
      <h3 className={s.products}>All products:</h3>
      <div><ChangeStateProducts /></div>
      
    </div>
  )
}
