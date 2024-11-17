import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { loadAllProductsAction } from "../store/reducers/productsReducer";
import { domain } from "../domain";


export const getProducts = (dispatch) => {
    fetch(`${domain}/products/all`)
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
};

export const getProductsByCategories = (category_id) => {

    return dispatch => {
        fetch(`${domain}/categories/${category_id}`)
        .then(res=> res.json())
        // .then(json => console.log(json))
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
}