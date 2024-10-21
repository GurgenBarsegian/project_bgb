import {React} from 'react';
import CartContainer from '../../components/CartContainer';
import { useSelector } from 'react-redux';
import s from './index.module.css'

export default function CartPage() {

  const cartState = useSelector(store => store.cart)
  
  return (
    <div className={s.cart} >
      <div className={s.div1}>
        <h2>Shopping cart</h2>
        {
          cartState.length === 0
          ? "Your cart is epmty"
          : <CartContainer cartState = {cartState} />
        }
      </div>
      <div className={s.div2}>
        <h3>Order details</h3>
        <form action="">
          <input type="text" placeholder="Name" name="name" className="input" />
          <input type="" placeholder="Phone number" name="phone_number" />
          <input type="text" placeholder="Email" name="email" />
        </form>
      </div>
    </div>
  )
}
