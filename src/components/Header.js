import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

function Header(){

    const [menu, setMenu] = useState(false)
    const [top, setTop] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                setTop(true)
            }
            else{
                setTop(false)
            }
        })
    })

    return(
        <header className={top ? "header_primary shadow" : "header_primary"}>
            <div className="header_container">
                <Link className="header_title_link" exact to="/"><h1 className="header_title">Eliott</h1></Link>
                <nav className={menu ? "header_navigation active" : "header_navigation"}>
                    <ul className="nav_list">
                        <NavLink onClick={() => setMenu(false)} exact to="/" className="nav_list-item">Home</NavLink>
                        <NavLink onClick={() => setMenu(false)} exact to="/api" className="nav_list-item">API</NavLink>
                        <NavLink onClick={() => setMenu(false)} exact to="/code" className="nav_list-item">Algo / Code</NavLink>
                        <NavLink onClick={() => setMenu(false)} exact to="/cv" className="nav_list-item">Mon CV</NavLink>
                        <NavLink onClick={() => setMenu(false)} exact to="/reporting" className="nav_list-item">Reporting</NavLink>
                        <NavLink onClick={() => setMenu(false)} exact to="/contact" className="nav_list-item">Contact</NavLink>
                    </ul>
                </nav>
                <button onClick={() => setMenu(!menu)} className="header_burgermenu-button"><i className="fas fa-bars"></i></button>
            </div>
        </header>
    )
}

export default Header