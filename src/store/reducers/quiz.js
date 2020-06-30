import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZ_CHANGE_ANSWER
} from "../actions/actionTypes";

const initialState = {
    quizes: [],
    quiz: null,
    loading: false,
    error: null
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state, loading: false, quiz: action.quiz
            }
        case FETCH_QUIZ_CHANGE_ANSWER:
            return Object.assign(state, state.quiz[0].rightAnswerId = action.answerId);
        case FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state
    }
}
