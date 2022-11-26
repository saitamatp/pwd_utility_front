import React from "react"

export default function renderNew(props) {

    return (
        <div>
            <h3>Account Name: {props.acc}</h3>
            <p>Password: {props.pwd}</p>

        </div>
    )
}