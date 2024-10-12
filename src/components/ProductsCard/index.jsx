import React from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.css';

export default function ProductsCard({ id, image, title, price}) {

    const dispatch = useDispatch();
  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
    </div>
  )
}
