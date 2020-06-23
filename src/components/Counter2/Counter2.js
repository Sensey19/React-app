import React from 'react';
import {ClickedContext} from '../../App';

export default props => {
    return (
        <div>
            <h3>Counter2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <div>Clicked 2!!!</div> : null}
            </ClickedContext.Consumer>
        </div>
    )
}
