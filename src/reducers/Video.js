import {
    SEARCH_TITLE,
    CART_LIST,
    TRENDING_VIDEOS,
    WATCHING_VIDEOS,
    CATEGORY_LIST,
    JAWBONE_HANDLE
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    searchTitleResult: [],
    cartList: [],
    trendingVideos: [],
    watchingVideos: [],

    categoryList: [],
    isJawOpen: false,
    colId: null,
    rowId: null,
    videoId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JAWBONE_HANDLE:
            return {
                ...state,
                isJawOpen: action.payload,
                colId: action.colId,
                rowId: action.rowId,
                videoId: action.videoId
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
        case TRENDING_VIDEOS:
            return {
                ...state,
                trendingVideos: action.payload
            }
        case WATCHING_VIDEOS:
            return {
                ...state,
                watchingVideos: action.payload
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
