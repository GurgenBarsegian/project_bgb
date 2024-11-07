import { loadCategoriesAction } from "../store/reducers/categoriesReducer";
import { loadCategoryAction } from "../store/reducers/categoryReducer";

export const getCategories = (dispatch) => {

    fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => dispatch(loadCategoriesAction(json)))

}

export const getCategory = (category_id) => {

    return dispatch => (
        fetch(`http://localhost:3333/categories/${category_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadCategoryAction(json)))
    )
}
