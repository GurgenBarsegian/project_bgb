import React from 'react'
import ProductsCard from '../ProductsCard'

export default function ProductsContainerForPage({products}) {

  return (
    <div>
 {products.products.map(el => <ProductsCard key={el.id}  {...el}/> )} 

    </div>
  )
}
