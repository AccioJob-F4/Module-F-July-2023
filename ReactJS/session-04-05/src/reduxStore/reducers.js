import { INCREMENT, DECREMENT } from "./actions";

export const INITIAL_STORE = { count: 0 };

export const reducer = (state = INITIAL_STORE, action) => {
  // console.log("REDUCER : ", action);
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
