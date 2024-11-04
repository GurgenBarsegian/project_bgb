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

export const filterProductAction = values => ({
    type: FILTER_PRODUCT, payload: values
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
                if(!el.discont_price){
                    el.visible = false
                }
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
        return [...state]
    } else if (action.type === SORT_PRODUCTS){
        if(action.payload === 'upside'){
            state.sort((a, b) => a.price - b.price)
        } else if (action.payload === 'downside'){
            state.sort((a, b) => b.price - a.price)
        } else if (action.payload === 'in alphabetic order'){
            state.sort((a, b) => a.title.localeCompare(b.title))
        }
        return [...state]
    }

    return state
} 