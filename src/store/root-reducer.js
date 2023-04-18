import { combineReducers } from "redux";
import { reducer } from "./reducer-todo";

export const rootReducer = combineReducers({ todos: reducer });
