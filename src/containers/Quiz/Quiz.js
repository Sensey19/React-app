import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import './Quiz.css';

class Quiz extends Component {
    state = {
        quiz: []
    }

    render() {
        return(
            <div>
                <h1>Quiz</h1>
                <ActiveQuiz></ActiveQuiz>
            </div>
        )
    }
}

export default Quiz