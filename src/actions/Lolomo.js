import { JAWBONE_HANDLE } from "../constants/ActionTypes";

export const openJawBone = (id) => {
  return {
    type: JAWBONE_HANDLE,
    payload: true,
    videoId: id
  }
};

export const closeJawBone = () => {
  return {
    type: JAWBONE_HANDLE,
    payload: false,
    videoId: null
  }
};
