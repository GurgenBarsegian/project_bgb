import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';
import s from './index.module.css';

export default function CartItem({id, image, title, discont_price, price, count}) {

    const dispatch = useDispatch();
    const discontProcent = Math.round(100 - ((discont_price / price) * 100));


  const tempPrice =() =>{

    if(discont_price === null){
      return <p>{price}$</p>
    } else {
      return <p>{discont_price}$ <span>{price}$</span> <span>{discontProcent}%</span></p>
    }
  
  }

  return (
    <div className={s.card}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <p>{ title }</p>
        
        <p>{tempPrice()}</p>
        <div>
            <div onClick={() => dispatch(decrementCountAction(id))}>
              -
            </div>
            <p>{ count }</p>
            <div onClick={() => dispatch(incrementCountAction(id))}>
              +
            </div>
        </div>
        
        <RxCross2 onClick={() => dispatch(deleteProductFromCartAction(id))} />
    </div>
  )
}
