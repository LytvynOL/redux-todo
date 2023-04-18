import { DELETE_TODO } from "./actions-const";

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
