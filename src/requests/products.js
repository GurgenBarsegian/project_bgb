import { loadAllProductsAction } from "../store/reducers/productsReducer"

export const getProducts = (dispatch) => {

    fetch('http://localhost:3333/products/all')
    .then(res=> res.json())
    .then(json => dispatch(loadAllProductsAction(json)))

}

