import {combineReducers} from "redux";
import { authReduce } from "./AuthReducer";

export const reducers = combineReducers({
    auth : authReduce
})