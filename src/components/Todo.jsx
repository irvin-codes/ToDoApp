import React from 'react'

import "../styles/Todo.css"

const Todo = ({title,status,handleTodo,id}) => {
    return (
        <div className="todo-card">
            <p className="todo-id">#{id}</p>
            <h1 className="todo-title">{title}</h1>
            <button 
                className={status ? "com-grn" : "com-rd"} 
                onClick={()=>handleTodo(id)}>
                    {status ? "Complete" : "Incomplete"}
                    </button>
        </div>
    )
}

export default Todo
