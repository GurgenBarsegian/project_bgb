import React from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.css';

export default function ProductsCard({ id, image, title, price, discont_price}) {

 
  // const discont = discont_price === null ? `${price} `: `${price} ${discont_price}`;

  const tempPrice =() =>{

    if(discont_price === null){
      return `${price}$`
    } else {
      return `${discont_price}$ ${price}$`
    }
  
  }

  const discontProcent = Math.round(100 - ((discont_price / price) * 100));

  


  return (
    <div  className={s.card}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{ title }</p>
        <p>{tempPrice()}</p>
        <p>
       
        </p>
      </div>
    </div>

  )
}

{/* <p className={s.discont}>{discontProcent}%</p> */}

{/* <span>{discont}$ </span>
<span className={s.price}>{price}$</span> */}


