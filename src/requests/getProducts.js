import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { loadAllProductsAction } from "../store/reducers/productsReducer";

export const getProducts = (dispatch) => {
    fetch('http://localhost:3333/products/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
};

export const getProductsByCategories = (category_id) => {

    return dispatch => {
        fetch(`http://localhost:3333/categories/${category_id}`)
        .then(res=> res.json())
        // .then(json => console.log(json))
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
}