const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const GET_DISCOUNTED_ITEMS = 'GET_DISCOUNTED_ITEMS'
const FILTER_PRODUCT = 'FILTER_PRODUCT';
const SORT_PRODUCTS = 'SORT_PRODUCTS'

export const loadAllProductsAction = products => ({type: LOAD_ALL_PRODUCTS, payload: products})

export const getDiscountedItemsAction = value => ({
    type: GET_DISCOUNTED_ITEMS, payload: value
})

export const sortProductsAction = value => ({
    type: SORT_PRODUCTS, payload: value
})

export const filterProductAction = value => ({
    type: FILTER_PRODUCT, payload: value
})

export const productsReducer = (state=[], action) => {

    if (action.type === LOAD_ALL_PRODUCTS){
        return action.payload.map(el => {
            el.visible = true;
            return el
        })
    
    } else if (action.type === GET_DISCOUNTED_ITEMS) {
        if (action.payload) {
            state.map(el => {
                    el.visible = false
                return el
            })
        } else {
            state.map(el => {
                el.visible = true;
                return el
            })
        }
    } else if (action.type === FILTER_PRODUCT) {
        const {min, max} = action.payload;
        state.map(el => {
            el.visible = el.price >= min && el.price <= max ? true : false;
            return el
        })
    }

    return state
} 