const defaultState = {
    data: [],
    status: 'loading'
}

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
const CHANGE_SINGLE_PRODUCT_STATUS = 'CHANGE_SINGLE_PRODUCT_STATUS';

export const loadSingleProductAction = product => ({ 
    type: LOAD_SINGLE_PRODUCT, payload: product 
});

export const changeSingleProductStatusAction = () => ({ 
    type: CHANGE_SINGLE_PRODUCT_STATUS 
});

export const singleProductReducer = (state = defaultState, action) => {
    if(action.type === LOAD_SINGLE_PRODUCT){
        return {
            data: action.payload[0],
            status: 'ready'
        }
    } else if (action.type === CHANGE_SINGLE_PRODUCT_STATUS){
        return {
            ...state,
            status: 'loading'
        }
    }
    return state
}