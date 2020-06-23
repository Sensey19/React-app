import React from "react";

const Menu = props => {
    return(
        <div
            onClick={props.onToggle}
            style={{cursor: "pointer", color: 'green'}}>Menu</div>
    )
}

export default Menu
