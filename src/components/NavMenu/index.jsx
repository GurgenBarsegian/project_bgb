import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <nav className={s.menu}>
    <Link to='/'>Main Page</Link>
    <Link to='/categories'>Categories</Link>
    <Link to='/all_products'>All products</Link>
    <Link to='/sales'>All sales</Link>
</nav>
  )
}
