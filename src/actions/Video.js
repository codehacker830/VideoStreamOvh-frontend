import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    SEARCH_TITLE,
    CART_LIST,
    TRENDING_VIDEOS,
    WATCHING_VIDEOS,
    CATEGORY_LIST,
    JAWBONE_HANDLE,
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

export const removeVote = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get(`/removevote/${id}`,
        ).then(res => {
            dispatch({ type: FETCH_SUCCESS });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during remove vote !" });
            console.log("Error****:", error.message);
        });
    }
};

export const upVote = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get(`/upvote/${id}`,
        ).then(res => {
            dispatch({ type: FETCH_SUCCESS });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during remove vote !" });
            console.log("Error****:", error.message);
        });
    }
};

export const downVote = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get(`/downvote/${id}`,
        ).then(res => {
            dispatch({ type: FETCH_SUCCESS });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during remove vote !" });
            console.log("Error****:", error.message);
        });
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
            dispatch({ type: FETCH_ERROR, payload: "Error during search by title !" });
            console.log("Error****:", error.message);
        });
    }
};

export const fetchedCartList = (cartList) => {
    return (dispatch) => {
        dispatch({ type: CART_LIST, payload: cartList });
    }
}
export const fetchedTrendingVideos = (videos) => {
    return (dispatch) => {
        dispatch({ type: TRENDING_VIDEOS, payload: videos})
    }
}
export const fetchedWatchingVideos = (videos) => {
    return (dispatch) => {
        dispatch({ type: WATCHING_VIDEOS, payload: videos})
    }
}

export const getCartList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/cart',
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: CART_LIST, payload: data.list });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during get cart list !" });
            console.log("Error****:", error.message);
        });
    }
};
export const getTrendingVideos = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/state/trending',
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: CART_LIST, payload: data.videos });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during get trending videos !" });
            console.log("Error****:", error.message);
        });
    }
};
export const getWatchingVideos = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/watching',
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: WATCHING_VIDEOS, payload: data.videos });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during get watching videos !" });
            console.log("Error****:", error.message);
        });
    }
};

export const getCategoryList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('categories')
            .then(({ data }) => {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: CATEGORY_LIST, payload: data.categories });
            }).catch(error => {
                dispatch({ type: FETCH_ERROR, payload: "Error during get category list !" });
                console.log("Error****:", error.message);
            })
    }
}

export const addToCart = (video_id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/cart', { video_id }
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            console.error(" +++ api response cart list +++", data.list);
            dispatch({ type: CART_LIST, payload: data.list });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during add to cart !" });
            console.log("Error****:", error.message);
        });
    }
}

export const removeFromCart = (video_id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/cart/delete', { video_id }
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: CART_LIST, payload: data.list });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Error during remove from cart !" });
            console.log("Error****:", error.message);
        });
    }
}
