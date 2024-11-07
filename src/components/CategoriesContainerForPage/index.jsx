import React from 'react'
import CategoryCard from '../CategoryCard'
import s from './index.module.css'
import CategoryCardForPage from '../CategoryCardForPage'

export default function CategoriesContainerForPage({categories}) {



  return (
    <div className={s.categories_container}>
        {
            categories.map(el => < CategoryCardForPage key={el.id} {...el} categories={categories}/>)
        }
    </div>
  )
}
