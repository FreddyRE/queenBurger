import React from 'react'

class TextInputBar extends React.Component{

    state = {term:''}

    render() {
        return(
            <div className="field">
                <div className="ui left icon input">
                    <i 
                        className={`${this.props.settings.iconName} icon`}>
                    </i>
                    <input
                        value = {this.state.term} 
                        type={this.props.settings.type || "text"} 
                        name={this.props.settings.name} 
                        id={this.props.settings.userName} 
                        placeholder={this.props.settings.placeholder}
                        onChange = {(e)=>{
                            this.props.settings.toUpperCase ? this.setState({term:e.target.value.toUpperCase()}) : this.setState({term:e.target.value})
                        }}
                        onFocusCapture = {
                            ()=> console.log("entroo")
                        }
                    />
                </div>
            </div>
        )


    }

}

export default TextInputBar