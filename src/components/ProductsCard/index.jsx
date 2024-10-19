import React from 'react';
import s from './index.module.css';
 
export default function ProductsCard({ id, image, title, price, discont_price}) {

  const discontProcent = Math.round(100 - ((discont_price / price) * 100));
  const tempPrice =() =>{

    if(discont_price === null){
      return <p>{price}$</p>
    } else {
      return <p>{discont_price}$ <span className={s.line}>{price}$</span> <span className={s.discont}>{discontProcent}%</span></p>
    }
  
  }

  
  return (
    <div  className={s.card}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{ title }</p>
        <p>{tempPrice()}</p>
       
      </div>
    </div>

  )
}

// {/* <p className={s.discont}>{discontProcent}%</p> */}

// {/* <span>{discont}$ </span>
// <span className={s.price}>{price}$</span> */}


//  `${discont_price}$ ${price.style.textDecoration = 'line-through'}$`