import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../requests/categories';
import CategoriesContainer from '../../components/CategoriesContainer';


export default function CategoriesPageForMain() {

    const categoriesState = useSelector(store => store.categories);

const dispatch = useDispatch();

useEffect(()=> dispatch(getCategories), []);

  return (


    <div>
<CategoriesContainer categories={categoriesState}/>

    </div>
  )
}
