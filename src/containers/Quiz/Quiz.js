import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js';

class Quiz extends Component {
    state = {
        numberQuestion: 0,
        quiz: [
            {
                questions: 'How old are you?',
                rightAnswerId: null,
                answers: [
                    {id: 1, text: 'I am 22'},
                    {id: 2, text: 'I am 44'},
                    {id: 3, text: 'I am 34'},
                    {id: 4, text: 'I am 56'}
                ]
            },
            {
                questions: 'How are you doing?',
                rightAnswerId: null,
                answers: [
                    {id: 5, text: 'just working'},
                    {id: 6, text: 'doesnt matter'},
                    {id: 7, text: 'I am fuzzy'},
                    {id: 8, text: 'coding'}
                ]
            }
        ]
    }

    nextQuestion = () => {
        this.setState((prevState) => {
            if (prevState.numberQuestion < 2) {
                return {
                    numberQuestion: prevState.numberQuestion++
                }
            }
        })
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
                <ActiveQuiz
                    answers={this.state.quiz[this.state.numberQuestion].answers}
                    questions={this.state.quiz[this.state.numberQuestion].questions}
                    rightAnswerId={this.state.quiz[this.state.numberQuestion].rightAnswerId}
                    numberQuestion={this.state.numberQuestion}
                    onAnswerClick={this.onAnswerClickHandler}
                    onNextQuestion={this.nextQuestion}/>
            </div>
        )
    }
}

export default Quiz
