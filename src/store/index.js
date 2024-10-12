import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';



const rootReducer = combineReducers({   
    categories: categoriesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))