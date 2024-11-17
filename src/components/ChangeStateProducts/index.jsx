import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductAction, getDiscountedItemsAction, sortProductsAction } from '../../store/reducers/productsReducer';
import ProductsContainer from '../ProductsContainer';
import { getProducts } from '../../requests/getProducts';

export default function ChangeStateProducts() {
 
    

    const allProductsState = useSelector(store => 
        store.products.filter(product => 
            store.discountedOnly ? product.discounted : true
        )
    );

    const dispatch = useDispatch();

    useEffect(() => dispatch(getProducts), []);

    const sort = e => dispatch(sortProductsAction(e.target.value));

    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => setIsChecked(!isChecked);
    const handleClick = e => {
        dispatch(getDiscountedItemsAction(e.target.checked));
    };

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(Infinity);

    const handleMinValue = e => setMinValue(e.target.value || 0);
    const handleMaxValue = e => setMaxValue(e.target.value || Infinity);

    useEffect(() => {dispatch(filterProductAction({min: minValue || 0, max: maxValue || Infinity}))}, 
  [minValue, maxValue]);

    

    return (
    <div >
        <div className={s.filter_container}> 
        <div className={s.filter_section}>
            <label for="chk1">Price: </label>
            <input type="number" placeholder="from" name='min' onChange={handleMinValue}/>
            <input type="number" placeholder="to" name='max' onChange={handleMaxValue}/>
        </div>
        <div className={s.checkbox_container}>
            <label for="chk1">Discounted items</label>
            <input type="checkbox" checked={isChecked} onChange={e => {
                handleCheck();
                handleClick(e);
            }}/>
        </div>
        <div className={s.filter_section}>
            <label >Sorted</label>
            <select onInput={sort}>
                <option value="-">by default</option>
                <option value='upside'>upside</option>
                <option value='downside'>downside</option>
                <option value='in alphabetic order'>in alphabetic order</option>
            </select>
           
              </div>
        </div>
        
    </div>
    
  )
}
