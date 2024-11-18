

const defaultState = {
    products: [],
}

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';

export const loadProductsByCategoryAction = products  => ({
    type: LOAD_PRODUCTS_BY_CATEGORY, payload: products
});

export const productsByCategoryReducer = (state = defaultState, action) => {

    if(action.type ===LOAD_PRODUCTS_BY_CATEGORY){
        return   {
            ...state,
            products: action.payload.data

  } 
}
  return state

}
