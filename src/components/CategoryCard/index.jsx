import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'


export default function CategoryCard({title, image}) {
  return (
 
    <div className={s.category_card}>
      
    <span className={s.span}>
      <h2>Categories</h2>
    </span>
        <div className={s.class_div}>
        <Link to='/categories'>All categories</Link>
        </div>

      <img src={`http://localhost:3333${image}`} alt={title} />
      <p>{title}</p>
       </div>
  )
}
