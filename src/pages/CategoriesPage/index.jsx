import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCategories } from '../../requests/categories';
import { useSelector } from 'react-redux';
import CategoriesContainerForPage from '../../components/CategoriesContainerForPage';
import s from './index.module.css'


export default function CategoriesPage() {

  const categoriesState = useSelector(store => store.categories);

  const dispatch = useDispatch();

  useEffect(()=> dispatch(getCategories), []);//we get all categories via fetch request and dispatch

  return (
    <div className={s.category}>
      <CategoriesContainerForPage categories={categoriesState} />
    </div>
  )
}