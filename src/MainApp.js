import React, {Component} from 'react';
import './MainApp.scss';
import Layout from './hoc/Layout/Layout.js';
import Quiz from './containers/Quiz/Quiz.js';

class MainApp extends Component {
    render() {
        return(
            <Layout>
                <Quiz></Quiz>
            </Layout>
        )
    }
}

export default MainApp