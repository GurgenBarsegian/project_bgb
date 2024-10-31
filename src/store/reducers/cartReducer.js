const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const CLEAR_CART = 'CLEAR_CART';

export const addProductToCartAction = product => ({ type: ADD_PRODUCT_TO_CART, payload: product });
export const deleteProductFromCartAction = product_id => ({ type: DELETE_PRODUCT_FROM_CART, payload: product_id });
export const decrementCountAction = product_id => ({ type: DECREMENT_COUNT, payload: product_id });
export const incrementCountAction = product_id => ({ type: INCREMENT_COUNT, payload: product_id });
export const clearCartAction = () => ({ type: CLEAR_CART });

const checkProduct = (state, payload) => {
    const product = state.find(el => el.id === payload.id);

    if (product) {
        if (payload.count > 1) {
            product.count += payload.count
            return [...state]
        } else {
            product.count++;
            return [...state]
        }
    } else {
        return [...state, payload]
    }
}

export const cartReducer = (state = [], action) => {
    if (action.type === ADD_PRODUCT_TO_CART) {
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_PRODUCT_FROM_CART) {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === INCREMENT_COUNT) {
        state.find(el => el.id === action.payload).count++
        return [...state]
    } else if (action.type === DECREMENT_COUNT) {
        const target = state.find(el => el.id === action.payload);

        if (target.count === 1) {
            return state.filter(el => el.id !== action.payload)
        } else {
            target.count--;
            return [...state]
        }
    } else if (action.type === CLEAR_CART) {
        return []
    }
    return state
}