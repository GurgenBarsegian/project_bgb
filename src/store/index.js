import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';

import { productsReducer } from './reducers/productsReducer';
import { newClientsReducer } from './reducers/newClientsReducer';




const rootReducer = combineReducers({   
    categories: categoriesReducer,
    products: productsReducer,
    newClient: newClientsReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))