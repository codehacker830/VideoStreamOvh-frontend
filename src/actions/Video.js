import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    SEARCH_TITLE,
    CART_LIST,
    CATEGORY_LIST,
    JAWBONE_HANDLE
} from "../constants/ActionTypes";
import axios from '../util/Api';

export const openJawBone = (videoId, rowId) => {
    return {
      type: JAWBONE_HANDLE,
      payload: true,
      videoId: videoId,
      rowId: rowId
    }
  };
  
  export const closeJawBone = () => {
    return {
      type: JAWBONE_HANDLE,
      payload: false,
      videoId: null
    }
  };

  
export const searchByTitle = ({ title }) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get(`/videos/title/${title}`,
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: SEARCH_TITLE, payload: data.videos });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        });
    }
};

export const getCartList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/cart',
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: CART_LIST, payload: data.list });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        });
    }
};

export const addToCart = (video_id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/cart', { video_id} 
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            console.error(" +++ api response cart list +++", data.list);
            dispatch({ type: CART_LIST, payload: data.list });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        });
    }
}

export const removeFromCart = (video_id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/cart/delete', { video_id} 
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: CART_LIST, payload: data.list });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        });
    }
}

export const getCategoryList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('categories')
        .then(({data}) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: CATEGORY_LIST, payload: data.categories });
        }).catch(error => {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        })
    }
}
