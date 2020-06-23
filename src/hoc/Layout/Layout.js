import React, {Component} from 'react';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle.js';
import Drawer from '../../components/Navigation/Drawer/Drawer.js';
import styles from './Layout.module.scss';

class Layout extends Component {
    state = {
        open: false
    }

    openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div>
                <MenuToggle onToggle={this.openMenu}/>
                {this.state.open ? <Drawer/> : null}

                <main className={styles.layout}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
