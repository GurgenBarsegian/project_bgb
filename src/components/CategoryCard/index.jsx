import React from 'react'
import s from './index.module.css'

export default function CategoryCard({title, image}) {
  return (
    <div className={s.category_card}>

      <img src={`http://localhost:3333${image}`} alt={title} />
      <p>{title}</p>
       </div>
  )
}
