// export const getAllProducts = (dispatch) => {
//     fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => dispatch(loadAllProductsAction(json)))
// }

// export const getProductsByCategories = (category_name) => {
//     return dispatch => {
//         fetch(`https://fakestoreapi.com/products/category/${category_name}`)
//         .then(res=> res.json())
//         .then(json => dispatch(loadProductsByCategoryAction(json)))
//     }
   
// }
import { loadAllProductsAction } from "../store/reducers/productsReducer";

export const getProducts = (dispatch) => {
    fetch('http://localhost:3333/products/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
};

export const getProductsByCategories = () => {

    return dispatch => {
        fetch(`http://localhost:3333/categories/1`)
        .then(res=> res.json())
        .then(json => console.log(json))
    }
}