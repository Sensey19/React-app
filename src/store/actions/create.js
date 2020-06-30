import axios from '../../axios/axios'
import {CREATE_QUIZ, REST_QUIZ} from "./actionTypes";

export function addQuizQuestion(item) {
    return {
        type: CREATE_QUIZ,
        payload: item
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuiz())
    }
}

export function resetQuiz() {
    return {
        type: REST_QUIZ
    }
}
