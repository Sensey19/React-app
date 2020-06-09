import React, {Component} from 'react';
import Car from './components/Car/Car'
import './App.css';

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2010},
            {name: 'Opel', year: 2015},
            {name: 'Audi', year: 2012}
        ],
        title: 'Hello',
        show: false
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
                    <Car
                        key={index}
                        name={item.name}
                        year={item.year}
                        onTitleChange={this.changeTitle.bind(this, item.name)}
                        onChangeName={event => this.changeName(event.target.value, index)}
                        onCarRemove={this.removeCar.bind(this, index)}/>
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
                {cars}
            </section>
        )
    }
}

export default App;
