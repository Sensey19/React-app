import axios from '../../axios/axios'
import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZ_CHANGE_ANSWER
} from "./actionTypes";

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const { data } = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(data).forEach((item, index) => {
                quizes.push({
                    id: item,
                    name: `Test №${index + 1}`
                })
            })
            dispatch(fetchQuizesSuccess(quizes))
        } catch (e) {
            console.log(e);
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizById(id) {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const res = await axios.get(`/quizes/${id}.json`)
            const quiz = res.data
            dispatch(fetchQuizSuccess(quiz))
        } catch (e) {
            console.log(e);
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizSetAnswerId(answerId) {
    return dispatch => {
        dispatch(fetchQuizChangeAnswer(answerId))
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export function fetchQuizChangeAnswer(answerId) {
    return {
        type: FETCH_QUIZ_CHANGE_ANSWER,
        answerId
    }
}

export function fetchQuizesError(error) {
    return {
        type: FETCH_QUIZES_ERROR,
        error
    }
}
