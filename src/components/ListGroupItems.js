import React, { Component } from 'react'
import Button from './common/TeamOmegaButtons'
import PropTypes from 'prop-types'


export default class ListGroup extends Component {
    
    render() {
        const {title, deleteHandler, editHandler} = this.props
        console.log("deleteHandler",deleteHandler);
        return (
            <div className='list-group-item container card mb-3 todo-item  ' >
                <span className='fs-5 fw-bolder float-start text-left mt-2  '>{title}</span>       
                <Button className='btn   btn-sm float-end mx-1 ' onSubmit={editHandler}  aria-label="Edit" Value={<img src="https://th.bing.com/th/id/OIP.49mrY_25slimKSFTXg-KOgHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7" alt='Edit' height="29px" width="29px"/>} toggle="modal" target="#exampleModal"/>
                
                <Button className='btn  btn-sm float-end' onSubmit={deleteHandler} aria-label="Delete" Value={<img src="https://th.bing.com/th/id/OIP.3cjEZUm_wE0HbiCdi6AUWAHaJN?w=139&h=180&c=7&r=0&o=5&pid=1.7" alt='Delete' height="29px" width="29px"/>} />
                
            </div>
        )
    }
}

ListGroup.propTypes ={
    title:PropTypes.string,
    deleteHandler:PropTypes.func,
    editHandler:PropTypes.func
}
