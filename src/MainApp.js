import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from "react-redux"
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Logout from './components/Logout/Logout';
import './MainApp.scss';
import {autoLogin} from "./store/actions/auth";
// import About from "./containers/About/About";
// import Technology from "./containers/Technology/Technology";

class MainApp extends Component {
    state = {
        isLogged: false
    }

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/" component={QuizList} exact/>
                <Redirect to={'/'}/>
            </Switch>
        )

        if (this.props.isAuth) {
            routes = (
                <Switch>
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/" component={QuizList} exact/>
                    <Redirect to={'/'}/>
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
                {/*<Quiz/>*/}
                {/*<button onClick={() => this.setState({isLogged: true})}>Log in</button>*/}
                {/*<Switch>*/}
                {/*    <Route path="/" component={() => <div>Home page!</div>} exact/>*/}
                {/*    {this.state.isLogged ? <Route path="/about" component={About}/> : null}*/}
                {/*    <Route path="/technology" component={Technology}/>*/}
                {/*    <Redirect to={'/'}/>*/}
                {/*    <Route render={() => <h1 style={{color: 'red'}}>404 not found</h1>}/>*/}
                {/*</Switch>*/}
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainApp))

