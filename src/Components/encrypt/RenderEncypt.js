import React from "react"

export default function renderDecrypt(props) {

    return (
        <div>
            <h3>Account Name: {props.acc}</h3>
            <small id="PasswordChild">Password: {props.pwd}</small>

        </div>
    )
}