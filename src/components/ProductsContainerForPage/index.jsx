import React from 'react'
import ProductCardForPage from '../ProductCardForPage'

export default function ProductsContainerForPage({oneCategory}) {
  return (
    <div>
        { oneCategory.map(el => <ProductCardForPage key={el.id} />)
}
    </div>
  )
}
