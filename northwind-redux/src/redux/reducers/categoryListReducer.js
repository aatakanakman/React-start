import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


//Reducer bizim için state döndürür. Tutucu olarak düşün.

export default function changeCategoryReducer(state=initialState.categories,action){

    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
        
        default:
            return state;
    }

}