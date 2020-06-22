import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js';

class Quiz extends Component {
    state = {
        quiz: [
            {
                questions: 'How old are you?',
                answers: [
                    {text: 'I am 22'},
                    {text: 'I am 44'},
                    {text: 'I am 34'},
                    {text: 'I am 56'}
                ]
            }
        ]
    }

    render() {
        return (
            <div>
                <h1>Answers by questions!</h1>
                <ActiveQuiz answers={this.state.quiz}/>
            </div>
        )
    }
}

export default Quiz
