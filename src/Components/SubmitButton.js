import React from 'react'


class SubmitButton extends React.Component {

    state = {wasClicked:undefined}

    handleInputClick() {
        this.props.onClickSubmit(this.state)
    }
    render() {
        return (
            <div 
                className="ui fluid large teal submit button"  
                onClick = { () =>{
                        this.setState({ wasClicked: true }, () => {
                            this.handleInputClick()
                        })

                    }
                }
            >{this.props.title}
            </div>

        )
    }
}

export default SubmitButton