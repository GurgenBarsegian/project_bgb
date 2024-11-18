<<<<<<< HEAD
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu';
import s from './index.module.css';
import { useSelector } from 'react-redux';
import { MdOutlineMenu } from "react-icons/md";
import { Context } from '../../context';

export default function Header() {

  const cartState = useSelector(store => store.cart);

  const {openMenu} =  useContext(Context);

  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  return (
    <div className={s.header}>
        <Link to='/'><img src="https://mditlevson.us/sites/default/files/styles/front_page_image/public/front-page-images/plant.png?itok=ZXW7McRv" alt="Main" /></Link>
        <NavMenu/>
        <Link to='/cart'><img src="https://i.pinimg.com/736x/95/67/ba/9567bac44b90867dc730858c2c528f01.jpg" alt="" className={s.count} />
        {
          cartState.length === 0
          ? ''
          : <span className={s.number}>{ totalCount }</span>
        }
        </Link>
        <MdOutlineMenu onClick={openMenu}/>
    </div>
  )
}
=======

>>>>>>> fe11390c72764016f42d1b9c35eb708b0333b5d3
