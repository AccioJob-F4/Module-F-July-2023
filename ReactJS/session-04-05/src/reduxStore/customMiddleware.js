import uniqid from "uniqid";

export const customMiddleware = (store) => (next) => (action) => {
  //   console.log("Custom middleware triggered : ", action);

  action.id = uniqid();

  next(action);
};
