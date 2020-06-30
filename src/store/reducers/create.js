import {CREATE_QUIZ, REST_QUIZ} from "../actions/actionTypes";

const initialState = {
    quiz: []
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_QUIZ:
            return {
                ...state, quiz: [...state.quiz, action.payload]
            }
        case REST_QUIZ:
            return {
                ...state, quiz: []
            }
        default:
            return state
    }
}
