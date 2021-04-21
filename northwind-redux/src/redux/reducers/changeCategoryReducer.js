import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';


//Reducer bizim için state döndürür. Tutucu olarak düşün.

export default function changeCategoryReduver(state=initialState.currentCategory,action){

    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
        
        default:
            return state;
    }

}