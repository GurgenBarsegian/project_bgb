import React from 'react';
import CategoriesPageForMain from '../CategoriesPageForMain';
import FirstOrderSale from '../../components/FirstOrderSale';
import SalesForBody from '../../components/SalesForBody';

export default function MainPage() {
  return (
    <div>
        <CategoriesPageForMain/>
        <FirstOrderSale/>
        <SalesForBody />
    </div>
  )
}
