import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { cartReducer } from './reducers/cartReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { categoryReducer } from './reducers/categoryReducer';



const rootReducer = combineReducers({   
    categories: categoriesReducer,
    category: categoryReducer,
    products: productsReducer,
    productsByCategory: productsByCategoryReducer,
    singleProduct:singleProductReducer,
    cart: cartReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))