import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem.js';

const AnswersList = props => {
    return (
        <ul>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}/>
                )
            })}
        </ul>
    )
}

export default AnswersList
