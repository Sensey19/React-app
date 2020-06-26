import React, {Component} from 'react'
import axios from '../../axios/axios'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import {createControl, validate, validateForm} from '../../form/formFramework'
import styles from './QuizCreator.module.scss'

function createOptionControl(number) {
    return createControl({
        id: number,
        label: `Option ${number}`,
        errorMsg: 'The value can not be empty',
    }, {require: true})
}

function createFromControls() {
    return {
        question: createControl({
            label: 'Enter your question',
            errorMsg: 'The question can not be empty',
        }, {require: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

export default class QuizCreator extends Component {
    state = {
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFromControls()
    }

    createQuiz = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/quizes.json', this.state.quiz)
            this.setState({
                quiz: [],
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFromControls()
            })
        } catch (e) {
            console.log(e);
        }
    }

    addQuestion = (e) => {
        e.preventDefault()
        const quiz = this.state.quiz.concat()
        const index = quiz.length + 1
        const {question, option1, option2, option3, option4} = this.state.formControls
        const questionItem = {
            id: index,
            question: question.value,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }

        quiz.push(questionItem)
        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFromControls()
        })
    }

    selectChange = e => {
        this.setState({
            rightAnswerId: +e.target.value
        })
    }

    onChangeHandler = (value, contlorName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[contlorName]}
        control.value = value
        control.touched = true
        control.valid = validate(control.value, (control.validation))
        formControls[contlorName] = control
        this.setState({formControls, isFormValid: validateForm(formControls)})
    }

    submitHandler = e => {
        e.preventDefault()
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Auxiliary key={index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        errorMsg={control.errorMsg}
                        onChange={e => this.onChangeHandler(e.target.value, controlName)}/>
                    {index === 0 ? <hr/> : null}
                </Auxiliary>
            )
        })
    }

    render() {
        return (
            <div className={styles.posts}>
                <div>
                    <h1>QuizCreator</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}

                        <Select
                            label='Choose the right answer!'
                            value={this.state.rightAnswerId}
                            onChange={this.selectChange}
                            options={[
                                {text: 1, value: 1},
                                {text: 2, value: 2},
                                {text: 3, value: 3},
                                {text: 4, value: 4}
                            ]}/>
                        <button
                            onClick={this.addQuestion}
                            disabled={!this.state.isFormValid}>Add question
                        </button>
                        <button
                            onClick={this.createQuiz}
                            disabled={!this.state.quiz.length === 0}>Create quiz
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
