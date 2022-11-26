import React from "react"

export default function renderDecrypt(props) {

    return (
        <div>
            <h3>Account Name: {props.acc}</h3>
            <p>Password: {props.pwd}</p>

        </div>
    )
}