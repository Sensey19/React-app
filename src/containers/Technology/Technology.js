import React, {Component} from "react";

class Technology extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    link: 'react',
                    name: 'React',
                    year: '2012'
                },
                {
                    link: 'angular',
                    name: 'Angular',
                    year: '2010'
                },
                {
                    link: 'vue',
                    name: 'Vue',
                    year: '2016'
                }
            ]
        }
    }

    render() {
        let stack = null
        stack = this.state.list.map((item, index) => {
            return (
                <li
                    key={index}
                    onClick={() => this.props.history.push('/technology/' + item.link)}>
                   {item.name}
                </li>
            )
        })

        return (
            <div>
                <ul>{stack}</ul>
            </div>
        )
    }
}

export default Technology
