import React from 'react'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'

export default function CategoriesContainer({categories}) {

  const categoriesForMain = [...categories].slice(0, 4);
  
  return (

    <div className={s.categories_container}>
      {
        categoriesForMain.map(el => <CategoryCard key={el.id} {...el}/> )
      }
    </div>
  )
}

