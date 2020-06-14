import React from "react";
import styles from "./Car.module.scss";

class Car extends React.Component {
    render() {
        let classExtra = [styles.car]
        if (this.props.name.length === 0) classExtra.push(styles.green)
        else classExtra.push(styles.red)

        return (
            <div className={classExtra.join(' ')}>
                <h1>{this.props.name}</h1>
                <p>{this.props.year}</p>
                <input onChange={this.props.onChangeName} value={this.props.name} type="text"/>
                <button onClick={this.props.onTitleChange}>Click</button>
                <button onClick={this.props.onCarRemove}>Delete</button>
                {this.props.children}
            </div>
        )
    }
}


export default Car;
