import {AUTH_TOKEN, LOG_OUT} from "../actions/actionTypes";

const initialState = {
    token: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_TOKEN:
            return {
                ...state, token: action.token
            }
        case LOG_OUT:
            return {
                ...state, token: null
            }
        default:
            return state
    }
}
