import React from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.css';

export default function ProductsCard({ id, image, title, price, discont_price}) {

  console.log(image);
  

  return (
    <div  className={s.card}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{ title }</p>
        <p>{ price }$</p>
      </div>
      <div>
          { 
            discont_price === null
            ? ''
            : `Discont: ${discont_price}`
          }
      </div>
    </div>

  )
}

