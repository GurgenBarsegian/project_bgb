import { loadCategoriesAction } from "../store/reducers/categoriesReducer";
import { loadCategoryAction } from "../store/reducers/categoryReducer";
import { domain } from "../domain";

export const getCategories = (dispatch) => {

    fetch(`${domain}/categories/all`)
        .then(res => res.json())
        .then(json => dispatch(loadCategoriesAction(json)))

}

export const getCategory = (category_id) => {

    return dispatch => (
        fetch(`${domain}/categories/${category_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadCategoryAction(json)))
    )
}
