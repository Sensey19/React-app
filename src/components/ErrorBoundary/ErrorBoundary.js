import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) return <h1 style={{color: 'red'}}>Error on the page</h1>
        return this.props.children
    }
}


