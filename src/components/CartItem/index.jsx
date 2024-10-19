import React from 'react';
import { useDispatch } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';
import s from './index.module.css';

export default function CartItem({id, image, title, discount_price, price, count}) {

    const dispatch = useDispatch();

  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
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
