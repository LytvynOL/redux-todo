import { DELETE_TODO } from "./actions-const";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    default:
      return state;
  }
};
