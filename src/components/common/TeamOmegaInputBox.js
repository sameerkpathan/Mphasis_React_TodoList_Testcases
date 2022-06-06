import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class TeamOmegaInputBox extends Component {
    changeHandler=(e)=>{
        this.props.onChange(e.target.value)
    }
    render() {
        const {todo, placeholder, className,type} = this.props
        return (
            <div data-test="TeamOmegaInput">
                <input type={type} className={className} placeholder={placeholder} onChange={this.changeHandler} value={todo} />
            </div>
        )
    }
}

TeamOmegaInputBox.propTypes ={
    todo:PropTypes.string,
    className:PropTypes.string,
    placeholder:PropTypes.string,
    type:PropTypes.string,
    
}
