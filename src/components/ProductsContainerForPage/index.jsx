import React from 'react'
import ProductsCard from '../ProductsCard'
import s from './index.module.css'


export default function ProductsContainerForPage({products}) {
 
  return (
         
    <div className={s.products_cont}>
 {products.products.map(el => <ProductsCard key={el.id}  {...el}/> )} 

    </div>
  
  )
}
