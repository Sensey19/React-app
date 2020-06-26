import React, {Component} from 'react';
import axios from '../../axios/axios'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js';
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component {
    state = {
        numberQuestion: 0,
        quiz: [],
        loading: true
    }

    async componentDidMount() {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/quizes/${id}.json`)
            const quiz = res.data
            this.setState({
                quiz,
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    onAnswerClickHandler = (answerId) => {
        let quiz = [...this.state.quiz]
        quiz[this.state.numberQuestion].rightAnswerId = answerId
        this.setState({quiz})
    }

    render() {
        return (
            <div>
                <h1>Answers by questions!</h1>
                {this.state.loading
                    ? <Loader/>
                    :  <ActiveQuiz
                        answers={this.state.quiz[this.state.numberQuestion].answers}
                        question={this.state.quiz[this.state.numberQuestion].question}
                        rightAnswerId={this.state.quiz[this.state.numberQuestion].rightAnswerId}
                        numberQuestion={this.state.numberQuestion}
                        onAnswerClick={this.onAnswerClickHandler}/>
                }
            </div>
        )
    }
}

export default Quiz

