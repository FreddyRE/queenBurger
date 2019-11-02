import React from 'react'

class TextInputBar extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
          inputText: '',
          inputTag: '',
          isTagToCheckInRealTime : '',
          errorClassName: undefined, 
          okClassName :props.settings.iconName,
          isTagToCheckInSubmit : ''
          
        }

        this._onBlur = this._onBlur.bind(this)
        this._onClick = this._onClick.bind(this)        
      }

      componentDidMount() {
        if(this.props.settings.isForUserName) {
            this.setState({isTagToCheckInRealTime:true})
            this.setState({isTagToCheckInSubmit:false})
        } else {
            this.setState({isTagToCheckInRealTime:false})
            this.setState({isTagToCheckInSubmit:true})
        }
      }
    
    _onClick() {
        this.setState({inputTag:this.props.formNo})

    }
    _onBlur() {
        this.props.onSubmit(this.state)
    }
    render() {
        return(
            <div className={`field ${this.state.errorClassName}`}>
                <div className="ui left icon input">
                    <i 
                        className={`${this.props.settings.iconName} icon`}>
                    </i>
                    <input
                        value = {this.state.inputText} 
                        type={this.props.settings.type || "text"} 
                        name={this.props.settings.name} 
                        id={this.props.settings.userName} 
                        placeholder={this.props.settings.placeholder}
                        onChange = {(e)=>{
                            this.props.settings.toUpperCase ? this.setState({inputText:e.target.value.toUpperCase()}) : this.setState({inputText:e.target.value})
                            //console.log(this.state.term)
                        }}
                        onBlur={this._onBlur}
                        onClick = {this._onClick}

                    /> 
                    {this.props.children}
                </div>
                
            </div>
        )


    }

}

export default TextInputBar