import React from "react";

export default props => {
    let classExtra = ['car']
    if (props.name.length === 0) classExtra.push('green')
    else classExtra.push('red')

    return (
        <div className={classExtra.join(' ')}>
            <h1>{props.name}</h1>
            <p>{props.year}</p>
            <input onChange={props.onChangeName} value={props.name} type="text"/>
            <button onClick={props.onTitleChange}>Click</button>
            <button onClick={props.onCarRemove}>Delete</button>
            {props.children}
        </div>
    )
}
