import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


//Reducer bizim için state döndürür. Tutucu olarak düşün.

export default function saveProductReducer(state=initialState.savedProduct,action){

    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
        
        default:
            return state;
    }

}