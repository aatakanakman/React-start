import * as actionType from './actionTypes';

export function changeCategory(category) {

    return {
        type : actionType.CHANGE_CATEGORY,
        payload : category
    }

}


export function getCategoriesSuccess(categories){

    return{
        type : actionType.GET_CATEGORIES_SUCCESS,
        payload : categories
    }

}

export function getCategories(){

    //Dispatch ele geçirmek yakalamak gibi anlamlarda kullanılır.
    return function(dispatch){
        let url = "http://localhost:3000/categories"
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getCategoriesSuccess(result)))


    }

}