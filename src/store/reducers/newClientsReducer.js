
const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT';


export const addNewClientAction = new_client => ({type: ADD_NEW_CLIENT, payload: new_client});


export const newClientsReducer = (state=[], action) => {


    if(action.type === ADD_NEW_CLIENT){

        return [...state, action.payload]
    }
    return state
}