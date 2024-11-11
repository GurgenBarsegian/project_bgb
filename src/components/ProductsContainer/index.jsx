import React from 'react';
import s from './index.module.css';
import ProductsCard from '../ProductsCard';
import { Link } from 'react-router-dom';
import ChangeStateProducts from '../../components/ChangeStateProducts';

export default function ProductsContainer({products}) {
  return (
    <div>

      <div className={s.breadCrumbs}>
          <Link to="/">Main Page</Link>
          <hr />
          <span>All products</span>
        </div>
      {/* <div>
      <ChangeStateProducts />
      </div> */}
      <div className={s.container}>
          {
              products.filter(el => el.visible).map(el => <ProductsCard key={el.id} {...el} />)
          }
      </div>
    </div>
  )
}
