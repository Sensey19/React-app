import React, {Component} from "react";
const links = [1, 2, 3]

class Drawer extends Component {
    renderLinks() {
        return links.map((item, index) => {
            return (
                <li key={index}>Link {item}</li>
            )
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default Drawer
