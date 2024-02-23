import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("loggedIn")) ?? false,
    user: JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null
}

export const authReduce = (state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.USER_LOGIN_SUCCESS:
            return {...state,isLoggedIn : true,user : payload}
        case ActionTypes.USER_LOGIN_FAILURE:
            return {isLoggedIn : false}
        case ActionTypes.USER_LOGOUT:
            return {isLoggedIn : false}
        default :
            return state;
    }
}