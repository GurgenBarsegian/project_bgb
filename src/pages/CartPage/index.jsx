import React, { useEffect } from 'react'
import CartContainer from '../../components/CartContainer'

export default function CartPage() {

  const cartState = useEffect(store => store.cart)
  
  return (
    <div>
      {
        cartState.length === 0
        ? "Your cart is epmty"
        : <CartContainer cartState = {cartState} />
      }
    </div>
  )
}
