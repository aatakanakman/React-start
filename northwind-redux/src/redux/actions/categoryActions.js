import * as actionType from './actionTypes';

export function changeCategory(category) {

    return {
        type : actionType.CHANGE_CATEGORY,
        payload : category
    }

}