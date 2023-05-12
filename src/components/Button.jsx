import React from "react";

const  Button = (props) => {
    return ( 
        <button onMouseDown={props.onButtonDown} onMouseUp={props.onButtonUp} onClick={props.onClickButton} className={`btn ${props.btnClass}`}>{props.label}</button>
     );
}

export default Button;