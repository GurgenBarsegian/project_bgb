import { loadCategoriesAction } from "../store/reducers/categoriesReducer";

export const getCategories = (dispatch) => {

    fetch('http://localhost:3333/categories/all')
    .then(res=> res.json())
    .then(json => dispatch(loadCategoriesAction(json)))

}