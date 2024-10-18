
const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';

export const loadAllProductsAction = products => ({type: LOAD_ALL_PRODUCTS, payload: products})

export const productsReducer = (state=[], action) => {

    if (action.type === LOAD_ALL_PRODUCTS){
        return action.payload
    }

    return state
} 