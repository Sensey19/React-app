import React, {Component} from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import './MainApp.scss';
// import About from "./containers/About/About";
// import Technology from "./containers/Technology/Technology";

class MainApp extends Component {
    state = {
        isLogged: false
    }

    render() {
        return(
            <Layout>
                <Switch>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/" component={QuizList} />
                </Switch>


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

export default withRouter(MainApp);

