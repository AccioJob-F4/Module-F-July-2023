import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { customMiddleware } from "./customMiddleware";
import { reducer } from "./reducers";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(customMiddleware))
);

export default store;
