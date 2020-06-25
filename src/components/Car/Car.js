import React from "react";
import PropTypes from "prop-types";
// import styles from "./Car.module.scss";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        if (this.props.index === 1) {
            this.inputRef.current.focus()
        }
    }

    render() {
        // let classExtra = [styles.car]
        // if (this.props.name.length === 0) classExtra.push(styles.green)
        // else classExtra.push(styles.red)

        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.year}</p>
                <input
                    onChange={this.props.onChangeName}
                    ref={this.inputRef}
                    value={this.props.name}
                    type="text"/>
                <button onClick={this.props.onTitleChange}>Click</button>
                <button onClick={this.props.onCarRemove}>Delete</button>
                {this.props.children}
            </div>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onCarRemove: PropTypes.func
}

export default Car;
