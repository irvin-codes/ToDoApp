import React from 'react'

import "../styles/MainCounter.css"

const MainCounter = ({count}) => {
    return (
        <div className="items-card">
            <p>counter :{count}</p>
            <p>Items in cart</p>
        </div>
    )
}

export default MainCounter
