import React, {Component} from 'react'
import Input from '../../components/UI/Input/Input'
import is from "is_js"

export default class Auth extends Component {
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMsg: 'Email is not valid',
                valid: false,
                touched: false,
                validation: {
                    require: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'text',
                label: 'Password',
                errorMsg: 'Password is not valid',
                valid: false,
                touched: false,
                validation: {
                    require: true,
                    minLength: 6
                }
            }
        }
    }

    login = () => {

    }

    register = () => {

    }

    validateControl = (value, validation) => {
        if (!value) return true
        let isValid = true

        if (validation.require) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    onChangeHandler = (e, contlorName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[contlorName]}
        control.value = e.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, (control.validation))
        formControls[contlorName] = control
        this.setState({formControls})
    }

    submitHandler = e => {
        e.preventDefault()
    }

    inputs = () => {
        return Object.keys(this.state.formControls).map((item, index) => {
            const control = this.state.formControls[item]
            return (
                <Input
                    key={index}
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    type={control.type}
                    shouldValidate={!!control.validation}
                    errorMsg={control.errorMsg}
                    onChange={e => this.onChangeHandler(e, item)}/>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Auth</h1>
                <form onSubmit={this.submitHandler}>
                    {this.inputs()}

                    <div>
                        <button onClick={this.login}>Log in</button>
                        <button onClick={this.register}>Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}
