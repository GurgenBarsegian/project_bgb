import React from 'react'
import CartItem from '../CartItem'

export default function CartContainer({cartState}) {
  return (
    <div>
        {
            cartState.map(el => <CartItem key={el.id} {...el} />)
        }
    </div>
  )
}
