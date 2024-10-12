import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';
import { newClientsReducer } from './reducers/newClientsReducer';



const rootReducer = combineReducers({   
    categories: categoriesReducer,
    newClient: newClientsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))