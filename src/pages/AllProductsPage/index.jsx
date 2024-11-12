import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/getProducts';
import ProductsContainer from '../../components/ProductsContainer';
import ChangeStateProducts from '../../components/ChangeStateProducts';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function AllProductsPage() {

  return (
    <div >
      <div className={s.breadCrumbs}>
          <Link to="/">Main Page</Link>
          <hr />
          <span>All products</span>
        </div>
      <h3 className={s.products}>All products:</h3>
      <div><ChangeStateProducts /></div>
      
    </div>
  )
}
