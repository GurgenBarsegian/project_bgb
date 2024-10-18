import React from 'react'
import CategoryCard from '../CategoryCard'
import s from './index.module.css'

export default function CategoriesContainerForPage({categories}) {



  return (
    <div className={s.categories_container}>
        {
            categories.map(el => < CategoryCard key={el.id} {...el}/>)
        }
    </div>
  )
}
