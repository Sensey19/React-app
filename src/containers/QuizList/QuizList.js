import React, {Component} from 'react'
import axios from '../../axios/axios'
import {NavLink} from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader'

export default class QuizList extends Component {
    state = {
        quizes: [],
        loading: true
    }

    renderQuizes = () => {
        return this.state.quizes.map((item) => {
            return (
                <li key={item.id}>
                    <NavLink to={'/quiz/' + item.id}>{item.name}</NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const res = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(res.data).forEach((item, index) => {
                quizes.push({
                    id: item,
                    name: `Test №${index + 1}`
                })
            })
            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <h1>QuizList</h1>
                {this.state.loading
                    ? <Loader/>
                    : <ul>{this.renderQuizes()}</ul>
                }
            </div>
        )
    }
}
