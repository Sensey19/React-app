import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

export default class QuizList extends Component {
    renderQuizes = () => {
       return [1, 2, 3].map((item, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + item}>Test {item}</NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>QuizList</h1>
                <ul>{this.renderQuizes()}</ul>
            </div>
        )
    }
}
