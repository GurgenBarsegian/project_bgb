import React, { useEffect } from 'react';
import ProductsContainer from '../ProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/getProducts';
import s from './index.module.css';
import b from './index.module.css';
import { Link } from 'react-router-dom';


export default function SalesForBody() {


    const allProductsState = useSelector(store => store.products);
    
    const dispatch = useDispatch();
    
    useEffect(() => dispatch(getProducts), []);
    
    const salesProducts = allProductsState.filter(el => el.discont_price !== null);
   
    // Функция для случайного перемешивания массива (алгоритм Фишера-Йетса)
    function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Меняем местами элементы
    }
    return arr;
    }

    // Перемешиваем массив и берем первые 4 элемента
    const randomItems = shuffleArray(salesProducts).slice(0, 4);


console.log(randomItems);

    
  return (
    <div className={s.body_sales}>
      <div>
        <span>
          <h2>Sale</h2>
        </span>
            <div className={s.class_div}>
            <Link to='/sales'>All sales</Link>
            </div>
      </div>
      <ProductsContainer products = {randomItems}/>
    </div>
  )
}
