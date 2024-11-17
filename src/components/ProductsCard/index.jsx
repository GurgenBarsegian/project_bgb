import React from 'react';
import s from './index.module.css';
import { addProductToCartAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import { domain } from '../../domain';
import { Link } from 'react-router-dom';
 
export default function ProductsCard({ id, image, title, price, discont_price}) {

  const dispatch = useDispatch();

  const discontProcent = Math.round(100 - ((discont_price / price) * 100));

  const tempPrice = () => {

    if (discont_price === null) {
      return <p>${price}</p>
    } else {
      return <p>${discont_price} <span className={s.line}>${price}</span> <span className={s.discont}>-{discontProcent}%</span></p>
    }
  }


  return (

    <div  className={s.card}>
      <Link to={`/products/${id}`}>
      
      <img src={`${domain}${image}`} alt={title} />
      
      <div>
        <p>{ title }</p>
        <p>{tempPrice()}</p>
         <div onClick={() => dispatch(addProductToCartAction({ id, image, title,discont_price, price, count: 1 }))} className={s.cart}>
        Add to cart 
      </div>
      </div>
      </Link>
      
      
      
    </div>
  )
}
