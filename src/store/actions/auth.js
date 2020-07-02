import axios from "axios";
import {AUTH_TOKEN, LOG_OUT} from "./actionTypes";

export function auth(email, password, isLogin) {
    return async dispatch => {
        let path = 'signUp?'
        const dataForm = {
            email,
            password,
            returnSecureToken: true
        }
        if (isLogin) path = 'signInWithPassword?'

        try {
            const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${path}key=AIzaSyBir4h6trAd4LEfDdWEzR2OS4fOBfkV7XI`, dataForm)
            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
            localStorage.token = data.idToken
            localStorage.userId = data.localId
            localStorage.expirationDate = expirationDate
            dispatch(authToken(data.idToken))
            dispatch(autoLogout(data.expiresIn))
        } catch (e) {
            console.log(e);
        }
    }
}

export function authToken(token) {
    return {
        type: AUTH_TOKEN,
        token
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

    return {
        type: LOG_OUT
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authToken(token))
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}
