import React from 'react'
import TextInputBar from './TextInputBar'
import TabBtn from './TabBtn'
import './ClientForm.css'

var settingsInputClient = {

    bar1: {
        name: "client",
        id: "clientInput",
        placeholder: "Nombre del cliente",
        iconName: "user",
        toUpperCase: true,
        classNameExtra:"nombre-cliente"
    }

}

class ClientForm extends React.Component {

    state ={
        nameClient : '',
        readyForOrder : false
    }
    onSubmitField =(term)=>{
        if(term.inputText != ''){
            this.setState({nameClient:term.inputText})
        } else {
            this.setState({nameClient:''})
            alert("favor de ingresar un nombre para cliente")
        }
    }

    handleClick = (term) =>{
        if(this.state.nameClient != ''){
           this.setState({readyForOrder:true}, ()=>{
               this.props.nameClientHandle(this.state)
           })
        } else {
            this.setState({readyForOrder:false})
        }
    }

    render() {
        return (
            <div className="client-form-wrapper">
                <TextInputBar 
                    settings = { settingsInputClient.bar1 }
                    onSubmit = { this.onSubmitField }>
                    <TabBtn onClickElement={this.handleClick} />
                </TextInputBar>
                
            </div> 
           
        )
    }
}

export default ClientForm