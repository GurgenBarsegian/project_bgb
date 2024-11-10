import { loadAllProductsAction } from "../store/reducers/productsReducer"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer" 

export const getProducts = (dispatch) => {

    fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))

}

export const getSingleProduct = (product_id) => {
    return dispatch => (
        fetch(`http://localhost:3333/products/${product_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)) )
    )
}

