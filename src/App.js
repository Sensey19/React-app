import React, {Component} from 'react';
import Car from './components/Car/Car';
import Counter from './components/Counter/Counter';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import './App.scss';

export const ClickedContext = React.createContext(false);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Ford', year: 2010},
                {name: 'Opel', year: 2015},
                {name: 'Audi', year: 2012}
            ],
            title: 'Hello',
            show: false,
            clicked: false
        }
    }

    changeTitle = title => {
        this.setState({title})
    }

    handleInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    toggleCars = () => {
        this.setState({
            show: !this.state.show
        })
    }

    changeName = (val, index) => {
        const cars = [...this.state.cars];
        cars[index].name = val;
        this.setState({cars});
    }

    removeCar = (index) => {
        let cars = [...this.state.cars];
        cars = cars.filter((item, i) => index !== i);
        this.setState({cars});
    }

    render() {
        let cars = null
        if (this.state.show) {
            cars = this.state.cars.map((item, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={item.name}
                            year={item.year}
                            index={index}
                            onTitleChange={this.changeTitle.bind(this, item.name)}
                            onChangeName={event => this.changeName(event.target.value, index)}
                            onCarRemove={this.removeCar.bind(this, index)}/>
                    </ErrorBoundary>
                )
            })
        }

        return (
            <section>
                <h2>{this.state.title}</h2>
                <input type="text" onChange={this.handleInput}/>
                <div>
                    <button onClick={this.toggleCars}>Show/Hide</button>
                </div>

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter/>
                </ClickedContext.Provider>

                <button onClick={() => this.setState({clicked: true})}>Clicked by counter2!</button>
                {cars}
            </section>
        )
    }
}

export default App;
