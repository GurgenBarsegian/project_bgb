import React from 'react'
import CategoryCard from '../CategoryCard';

export default function CategoriesContainer({categories}) {

  const categoriesForMain = categories.slice(0, 4);
  return (

    <div>
      {
        categoriesForMain.map(el => <CategoryCard key={el.id} {...el}/> )
      }
    </div>
  )
}

