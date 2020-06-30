import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchQuizById, fetchQuizSetAnswerId} from '../../store/actions/quiz'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js';
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component {
    state = {
        quizId: this.props.match.params.id,
        detectChangeAnswer: 0
    }

    async componentDidMount() {
        this.props.fetchQuizById(this.state.quizId)
    }

    fetchQuizSetAnswerId = (answerId) => {
        this.props.fetchQuizSetAnswerId(answerId)
        this.setState({detectChangeAnswer: this.state.detectChangeAnswer + 1})
    }

    render() {
        return (
            <div>
                <h1>Answers by questions!</h1>
                {this.props.loading || !this.props.quiz
                    ? <Loader/>
                    : <ActiveQuiz
                        answers={this.props.quiz[0].answers}
                        question={this.props.quiz[0].question}
                        rightAnswerId={this.props.quiz[0].rightAnswerId}
                        onAnswerClick={this.fetchQuizSetAnswerId}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        fetchQuizSetAnswerId: answerId => dispatch(fetchQuizSetAnswerId(answerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

