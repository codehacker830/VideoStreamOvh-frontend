import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE, EMAIL_VERIFICATION_MESSAGE } from '../constants/ActionTypes'

const INIT_STATE = {
    error: "",
    loading: false,
    message: '',
    status: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                loading: true,
                error: '',
                message: '',
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                status: true,
                loading: false,
                message: action.payload || '',
                error: '',
            };
        }
        case FETCH_ERROR: {
            return {
                ...state,
                status: false,
                loading: false,
                message: '',
                error: action.payload || ''
            };
        }
        default:
            return state;
    }
}
