import {React} from 'react';
import CartContainer from '../../components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CartPage() {

  const cartState = useSelector(store => store.cart)
  const dispatch = useDispatch();

  

    const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
    const totalSum = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);
  
  return (
    <div className={s.cart}>
      <h2>Shopping Cart</h2>
      {
        cartState.length === 0
          ? (
            <div>
              <p>Looks like you have no items in your basket currently</p>
              <Link to='/all_products'>
                <button type="button">Continue Shopping</button>
              </Link>
            </div>
          )
          : (
            <div className={s.cart1}>
              <div className={s.list}>
                <CartContainer cartState={cartState} />
              </div>
              <div className={s.order_form}>
                <p className={s.order_details}>Order details </p>
                <p  className={s.items}>{totalCount} items</p>
                <p className={s.total_price}>Total</p> 
                <p className={s.price}>${totalSum}</p>

                <form action="">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    className={s.input} 
                    required 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    name="phone_number" 
                    className={s.input} 
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    className={s.input} 
                    required 
                  />
                  <button type="submit" className={s.button} >Order</button>
                </form>
              </div>
            </div>
          )
      }
    </div>

  )
}

