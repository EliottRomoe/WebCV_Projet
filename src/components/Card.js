import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

function Card(props) {
    return (
        <Link to={props.link} className="card_link">
            <div className="card">
                <p className="card_icon">{props.icon}</p>
                <div>
                    <h3 className="card_title">{props.title}</h3>
                    <p className="card_text">{props.text}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card