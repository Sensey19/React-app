import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import styles from './Drawer.module.scss'

class Drawer extends Component {
    renderLinks(links) {
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
        const links = [{to: '/', label: 'List', exact: true}]
        if (this.props.isAuth) {
            links.push(
                {to: '/quiz-creator', label: 'Quiz creator', exact: false},
                {to: '/logout', label: 'Log out', exact: false},
            )
        } else {
            links.push({to: '/auth', label: 'Auth', exact: false})
        }

        return (
            <nav>
                <ul>
                    {this.renderLinks(links)}
                </ul>
            </nav>
        )
    }
}

export default Drawer
