import React from 'react'
import styles from './Input.module.scss'

function isValid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [styles.input]
    const htmlFor = `${inputType}-${Math.random()}`
    if (isValid(props)) cls.push(`${styles.invalid}`)

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                id={htmlFor}
                onChange={props.onChange}
                value={props.value}
                type={inputType}/>
            {isValid(props)
                ? <span className={styles.error}>{props.errorMsg}</span>
                : null}
        </div>
    )

}

export default Input
