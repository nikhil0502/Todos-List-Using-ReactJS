import React from 'react';

export const Todo = ({todo , onDelete}) => {
    return (
        <>
        <div className="my-3">
            <h4 className="fs-4">{todo.title}</h4>
            <p className="fs-6 ">{todo.des}</p>
            <button className="btn  btn.sm  btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    );
}

