import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout.js';
import Quiz from './containers/Quiz/Quiz.js';
import './MainApp.scss';

class MainApp extends Component {
    render() {
        return(
            <Layout>
                <Quiz/>
            </Layout>
        )
    }
}

export default MainApp

