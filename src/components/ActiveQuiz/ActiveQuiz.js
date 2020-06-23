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
                <strong>{props.numberQuestion + 1}.</strong>
                <span> {props.questions}</span>
                <span onClick={props.onNextQuestion} style={{marginLeft: '20px'}}>Next question</span>
                <p>{answer}</p>
            </div>
            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}/>
        </div>
    )
}

export default ActiveQuiz
