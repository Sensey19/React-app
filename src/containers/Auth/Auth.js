import React, {Component} from 'react'
import {connect} from "react-redux"
import Input from '../../components/UI/Input/Input'
import Loader from "../../components/UI/Loader/Loader";
import is from "is_js"
import {auth} from "../../store/actions/auth";

class Auth extends Component {
    state = {
        isFormValid: false,
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
        },
        loading: false
    }

    login = () => {
        const form = this.state.formControls
        this.props.auth(form.email.value, form.password.value, true)
    }

    register = () => {
        const form = this.state.formControls
        this.props.auth(form.email.value, form.password.value, false)
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
        control.value = e
        control.touched = true
        control.valid = this.validateControl(control.value, (control.validation))
        formControls[contlorName] = control

        let isFormValid = true
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })
        this.setState({formControls, isFormValid})
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
                    onChange={e => this.onChangeHandler(e.target.value, item)}/>
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
                        <button onClick={this.login} disabled={!this.state.isFormValid}>Log in</button>
                        <button onClick={this.register} disabled={!this.state.isFormValid}>Sign up</button>
                    </div>
                </form>
                {this.state.loading ? <Loader/> : null}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(Auth)
