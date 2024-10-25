import React from 'react';
import s from './index.module.css';
import { addProductToCartAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';
 
export default function ProductsCard({ id, image, title, price, discont_price}) {

  const dispatch = useDispatch();

  const discontProcent = Math.round(100 - ((discont_price / price) * 100));

  const tempPrice =() =>{

    if(discont_price === null){
      return <p>{price}$</p>
    } else {
      return <p>{discont_price}$ <span className={s.line}>{price}$</span> <span className={s.discont}>{discontProcent}%</span></p>
    }
    }

  
  return (
    <div  className={s.card}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{ title }</p>
        <p>{tempPrice()}</p>
      </div>
      <div onClick={() => dispatch(addProductToCartAction({ id, image, title, price }))}>
        Add to cart
      </div>
    </div>
  )
}
