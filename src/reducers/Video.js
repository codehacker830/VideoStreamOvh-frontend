import {
    SEARCH_TITLE,
    CART_LIST,
    CATEGORY_LIST
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    searchTitleResult: [],
    cartList: [],
    categoryList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_TITLE:
            return {
                ...state,
                searchTitleResult : action.payload
            };
        case CART_LIST:
            return {
                ...state,
                cartList : action.payload
            }
        case CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload
            }
        default:
            return state;
    }
};