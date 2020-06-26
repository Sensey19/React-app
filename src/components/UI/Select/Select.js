import React from 'react'

const Select = props => {
    return(
        <div>
            <label>{props.label}</label>
            <select
                onChange={props.onChange}
                value={props.value}>
                {
                    props.options.map((option, index) => {
                        return(
                            <option
                                key={option.value + index}
                                value={option.value}>
                                {option.text}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select
