import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCategories } from '../../requests/categories';
import { useSelector } from 'react-redux';
import CategoriesContainerForPage from '../../components/CategoriesContainerForPage';



export default function CategoriesPage() {

  const categoriesState = useSelector(store => store.categories);

  const dispatch = useDispatch();

  useEffect(()=> dispatch(getCategories), []);

  return (
    <div>
<CategoriesContainerForPage categories={categoriesState} />
    </div>
  )
}
