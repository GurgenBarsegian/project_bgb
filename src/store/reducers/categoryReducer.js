const defaultState = {
    data: {},
    status: 'loading'
};

const LOAD_CATEGORY = 'LOAD_CATEGORY';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export const loadCategoryAction = category => ({ type: LOAD_CATEGORY, payload: category });

export const changeCategoryStatusAction = () => ({
    type: CHANGE_CATEGORY
});

export const categoryReducer = (state = defaultState, action) => {
    if (action.type === LOAD_CATEGORY) {
        return {
            data: action.payload.category, // Здесь сохраняем только значение category
            status: 'ready'
        };
    } else if (action.type === CHANGE_CATEGORY) {
        return {
            ...state,
            status: 'loading'
        };
    }

    return state;
};