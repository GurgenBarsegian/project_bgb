import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import { newClientsReducer } from './reducers/newClientsReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { cartReducer } from './reducers/cartReducer';


const rootReducer = combineReducers({   
    categories: categoriesReducer,
    category: categoryReducer,
    products: productsReducer,
    newClient: newClientsReducer,
    singleProduct:singleProductReducer,
    cart: cartReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))