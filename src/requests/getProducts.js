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

export const getProducts = () => {
    fetch('http://localhost:3333/products/all')
    .the(res => res.json())
    .then(json => console.log(json))
}