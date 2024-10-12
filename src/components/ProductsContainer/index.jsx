import React from 'react';
import s from './index.module.css';
import ProductsCard from '../ProductsCard';

export default function ProductsContainer({products}) {
  return (
    <div className={s.container}>
        {
            products.map(el => <ProductsCard key={el.id} {...el} />)
        }
    </div>
  )
}
