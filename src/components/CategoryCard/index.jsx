import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';
import { domain } from '../../domain';


export default function CategoryCard({title, image}) {
  return (
 
    <div className={s.category_card}>
     <div>
    <span className={s.span}>
    </span>
        <div className={s.class_div}>
        </div>
        </div> 

      <img src={`${domain}${image}`} alt={title} />
      <p>{title}</p>
       </div>
  )
}
