import React from 'react'

class SubmitButton extends React.Component {

    handleInputClick() {
        console.log("ok")
    }
    render() {
        return (
            <div 
                className="ui fluid large teal submit button"  
                onClick={this.handleInputClick}>{this.props.title}
            </div>
        )
    }
}

export default SubmitButton