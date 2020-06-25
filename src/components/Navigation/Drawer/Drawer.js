import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import styles from './Drawer.module.scss'

const links = [
    {
        to: '/',
        label: 'List',
        exact: true
    },
    {
        to: '/auth',
        label: 'Auth',
        exact: false

    },
    {
        to: '/quiz-creator',
        label: 'Quiz creator',
        exact: false
    }
]

class Drawer extends Component {
    renderLinks() {
        return links.map((item, index) => {
            return (
                <li className={styles.nav} key={index}>
                    <NavLink
                        to={item.to}
                        exact={item.exact}
                        activeClassName={styles.active}>{item.label}</NavLink>
                </li>
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
