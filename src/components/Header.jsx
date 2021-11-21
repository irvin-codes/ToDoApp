import React from 'react'

//STYLES
 import "../styles/Header.css"

const Header = ({handleDataAll, handleDataComplete,handleDataApiIncomplete}) => {
    return (
        <header className="header-container">
            <div>
                <h2 className="header-logo">My Todo App </h2>
            </div>
            <ul className="nav-items">
                <li className="nav-li" >
                    <button className="nav-item-all" onClick={handleDataAll}>All</button>
                </li>
                <li className="nav-li">
                    <button className="nav-item-complete" onClick={handleDataComplete}>Complete</button>
                </li>
                <li className="nav-li"> 
                    <button className="nav-item-incomplete" onClick={handleDataApiIncomplete}>Incomplete</button>
                </li>
            </ul>
        </header>
    )
}

export default Header
