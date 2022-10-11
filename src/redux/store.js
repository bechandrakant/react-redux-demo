import { combineReducers, createStore, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/cakeReducers";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./users/userReducer";
import thunk from "redux-thunk";
import { postsReducer } from "./posts/postReducer";
import { imageReducer } from "./images/imageReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCream: iceCreamReducer,
  users: userReducer,
  posts: postsReducer,
  images: imageReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
