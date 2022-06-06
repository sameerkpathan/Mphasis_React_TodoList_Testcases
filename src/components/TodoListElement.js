import React, { Component } from 'react'
import ListGroup from './ListGroupItems'
import PropTypes from 'prop-types'


export default class TodoListApp extends Component {
    render() {
        const {todos, deleteHandler, editHandler} = this.props

        const todosList = 
            todos.map(todo => {
                return (
                    <ListGroup key={todo.id} title={todo.title} deleteHandler={() => deleteHandler(todo.id)} editHandler={() => editHandler(todo.id)} />
                );
            })
        return (
            <div  data-test="TeamOmegaToDoList">
                <div className='list-group mt-5 mb-3 m-3 ToDoList' >
                    {todosList}
                </div>
            </div>
        )
    }
}

TodoListApp.propTypes ={
    todos:PropTypes.array,
    deleteHandler:PropTypes.func,
    editHandler:PropTypes.func,

}