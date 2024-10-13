import React from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.css';
import { SlHeart } from "react-icons/sl";

export default function ProductsCard({ id, image, title, price}) {

    const dispatch = useDispatch();
  return (
    <div className={s.card}>
      <SlHeart />
        <img src={image} alt={title} />
        <div>
        <p>{ title }</p>
        <p>{ price }$</p>
        </div>
    </div>
  )
}
