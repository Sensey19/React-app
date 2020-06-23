import React from 'react';
import './ActiveQuiz.css';

const ActiveQuiz = props => {
    return (
        <div>
            <p>
                <span>
                    <strong>1</strong>
                    How are you doing?
                    <small className="quiz-small">1 of 4</small>
                </span>
            </p>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )

}


export default ActiveQuiz