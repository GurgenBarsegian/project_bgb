import React from 'react'

export default function CategoryCard({title, image}) {
  return (
    <div>

      <img src={`http://localhost:3333${image}`} alt={title} />
      <p>{title}</p>
    </div>
  )
}
