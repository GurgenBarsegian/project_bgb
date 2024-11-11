import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { IoCloseOutline } from "react-icons/io5";
import { Context } from '../../context';

export default function NavMenu() {
  
  const {closeMenu, menuActive} =  useContext(Context);

  return (
    <nav className={[s.menu, menuActive ? s.active : ''].join(' ')}>
    <div className={s.nav}>
    <Link to='/'>Main Page</Link>
    <Link to='/categories'>Categories</Link>
    <Link to='/all_products'>All products</Link>
    <Link to='/sales'>All sales</Link>
    <IoCloseOutline onClick={closeMenu}/>
    </div>
</nav>
  )
}
