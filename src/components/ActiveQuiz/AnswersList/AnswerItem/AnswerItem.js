import React from 'react';

const AnswerItem = props => {
    return (
        <li onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem
