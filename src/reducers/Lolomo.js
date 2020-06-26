import {
    JAWBONE_HANDLE
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    isJawOpen: false,
    videoId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JAWBONE_HANDLE:
            return {
                ...state,
                isJawOpen : action.payload,
                videoId: action.videoId
            };
        default:
            return state;
    }
};