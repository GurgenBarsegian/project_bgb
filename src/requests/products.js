import { loadAllProductsAction } from "../store/reducers/productsReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer" ;
import { domain } from "../domain";

export const getProducts = (dispatch) => {

    fetch(`${domain}/products/all`)
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))

}

export const getSingleProduct = (product_id) => {
    return dispatch => (
        fetch(`${domain}/products/${product_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)) )
    )
}