import React from "react"

const Button = (props: { title?: any; style?: any; children?: any; onClick?: any }) => {
    return (
        <div>
            <button onClick={props.onClick} style={props.style}>
                <p>{props.title}</p>
                {props.children}
            </button>
        </div>
    )
}

export default Button
