import React from 'react';
import AnswersList from './AnswersList/AnswersList.js';

const ActiveQuiz = props => {
    return (
        <div>
            <p>
                <strong>1.</strong>
                <span> How are you?</span>
                <span> <strong>3</strong> from <strong>12</strong></span>
            </p>

            <AnswersList answers={props[0].answers}/>
        </div>
    )
}

export default ActiveQuiz
