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
    <div className={s.cart} >
      <h2>Shopping cart</h2>
      {
        cartState.length === 0
          ? <div>
            <p>Looks like you have no items in your basket currently</p>
            <Link to='/all_products'>
            <button>Continue Shopping</button>
            </Link>
          </div>
          : <div>
              <div className={s.div1}>
                <CartContainer cartState = {cartState} /> 
              </div>
              <div className={s.div2}>
                <h3>Order details {totalCount} items</h3>
                <h3>Total {totalSum}$</h3>

                <form action="">
                  <input type="text" placeholder="Name" name="name" className="input" />
                  <input type="" placeholder="Phone number" name="phone_number" />
                  <input type="text" placeholder="Email" name="email" />
                  <button>Order</button>
                </form>
              </div>
          </div>
      } 
    </div>
  )
}

