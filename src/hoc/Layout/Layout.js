import React, {Component} from 'react';
import styles from './Layout.module.scss';

class Layout extends Component {
    render() {
        return (
            <div>
                <main className={styles.layout}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
