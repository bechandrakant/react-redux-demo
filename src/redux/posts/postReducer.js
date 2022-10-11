import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./postType";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_SUCCESS:
      return { loading: false, posts: action.payload, error: "" };
    case FETCH_POST_FAILURE:
      return { loading: false, posts: [], error: action.payload };
    default:
      return state;
  }
};
