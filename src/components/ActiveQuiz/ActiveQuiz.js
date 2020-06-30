import React from 'react';
import AnswersList from './AnswersList/AnswersList.js';

const ActiveQuiz = props => {
    let answer = null
    if (props.rightAnswerId !== null) {
        answer = props.answers.map((item) => {
            return (
                (item.id === props.rightAnswerId) && item.text
            )
        })
    }

    return (
        <div>
            <div>
                <span> {props.question}</span>
                <p>{answer}</p>
            </div>
            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}/>
        </div>
    )
}

export default ActiveQuiz
