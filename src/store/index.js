import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { cartReducer } from './reducers/cartReducer';




const rootReducer = combineReducers({   
    categories: categoriesReducer,
    products: productsReducer,
    productsByCategory: productsByCategoryReducer,
    cart: cartReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))