import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS, HIDE_MESSAGE, SHOW_MESSAGE, EMAIL_VERIFICATION_MESSAGE} from '../constants/ActionTypes'

const INIT_STATE = {
  error: "",
  loading: false,
  message: '',
  status: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...state, error: '', message: '', loading: true};
    }
    case FETCH_SUCCESS: {
      return {
          ...state, 
          loading: false,
          status: true,
          message: action.payload || '', 
        };
    }
    case FETCH_ERROR: {
      return {
          ...state, 
          loading: false,
          status: false, 
          error: action.payload || ''
        };
    }
    default:
      return state;
  }
}
