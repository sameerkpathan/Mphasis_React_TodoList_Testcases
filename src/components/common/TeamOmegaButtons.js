import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class TeamOmegaButtons extends Component {
    // handleClick = e => {
    //     if (!this.props.onSubmit)
    //       return;
    //     this.props.onSubmit(e);
    //   }
    render() {
        const { Value, className,onSubmit,dismiss, toggle, target} = this.props

        
        return (
            <div>
                <button type='button' className={className} onClick={onSubmit} data-bs-dismiss={dismiss}  data-bs-toggle={toggle} data-test="TeamOmegaButton_Component" data-bs-target={target}>{Value}</button>

            </div>
        )
    }
}

TeamOmegaButtons.propTypes ={
    className:PropTypes.string,
    onSubmit:PropTypes.func,
    dismiss:PropTypes.string,
    toggle:PropTypes.string,
    target:PropTypes.string,
}

export default TeamOmegaButtons;