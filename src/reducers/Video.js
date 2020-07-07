import {
    SEARCH_TITLE,
    CART_LIST,
    CATEGORY_LIST,
    JAWBONE_HANDLE
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    searchTitleResult: [],
    cartList: [],
    categoryList: [],
    isJawOpen: false,
    videoId: null,
    rowId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JAWBONE_HANDLE:
            return {
                ...state,
                isJawOpen: action.payload,
                videoId: action.videoId,
                rowId: action.rowId
            };
        case SEARCH_TITLE:
            return {
                ...state,
                searchTitleResult: action.payload
            };
        case CART_LIST:
            return {
                ...state,
                cartList: action.payload
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
