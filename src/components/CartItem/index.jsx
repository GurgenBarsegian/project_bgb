import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';
import s from './index.module.css';
import { domain } from '../../domain';

export default function CartItem({id, image, title, discont_price, price, count}) {

    const dispatch = useDispatch();
    const discontProcent = Math.round(100 - ((discont_price / price) * 100));


  const tempPrice =() =>{

    if(discont_price === null){
      return <p>{price}$</p>
    } else {
      return <p>{discont_price}$ <span className={s.old_price}>{price}$</span></p>
    }
  
  }

  return (
    <div className={s.card}>
      <img src={`${domain}${image}`} alt={title} className={s.image} />
      <div className={s.details}>
        <p className={s.title}>{ title }</p>
        <div className={s.quantity_controls}>
          <button 
            className={s.decrement} 
            onClick={() => dispatch(decrementCountAction(id))}
          >
            -
          </button>
          
          <p className={s.count}>{ count }</p>
          
          <button 
            className={s.increment} 
            onClick={() => dispatch(incrementCountAction(id))}
          >
            +
          </button>
          <p className={s.price}>{tempPrice()}</p>
    </div>
    
    <RxCross2 
      className={s.remove_icon} 
      onClick={() => dispatch(deleteProductFromCartAction(id))} 
    />
  </div>
</div>
  )
}
