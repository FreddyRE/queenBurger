import Modal from 'react-modal'
import React from 'react'
import TextInputBar from './TextInputBar'



var settingsInputsBar = {
    barName: {
        name: "rename",
        id: "rename-cliente-input",
        placeholder: "renombra cliente",
        iconName: "user",
        type: "text"
    }
}

class ModalMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = { didOpen: false, clientName: undefined, wasChangedName: false }
    }

    onSubmitField = (term) => {
        if (term.inputText != "") {
            this.setState({ clientName: term.inputText })
            this.setState({ wasChangedName: true })
        } else {
            this.setState({ wasChangedName: false })
        }
    }
    componentWillReceiveProps = () => {
        setTimeout(() => {
            if (this.props.modalShouldOpen) {
                this.setState({ didOpen: true }, () => { })
            }
        }, 100);
    }

    onConfirmChangeName = () => {
        if (this.state.wasChangedName === false) {
            alert("No se realizara cambio a nombre invalido")
            this.setState({ didOpen: true })
        } else {
            this.setState({ didOpen: false }, () => {
                this.setState({ wasChangedName: false })
                this.props.onChangeName(this.state.clientName)
            })
        }
    }

    render() {

        return (
            <Modal isOpen={this.state.didOpen}
                style={
                {
                    content: {
                        width: '40%',
                        height: '40%',
                        textAlign: "center",
                        top: "25%",
                        left: "30%"
                    }
                }
            }>
                <div className="ui icon header" >
                    <i className="bullhorn icon" > </i>
                    Cambiar nombre de cliente 
                </div> 
                <div className="content text-change-name-modal" >
                    <TextInputBar 
                        settings={settingsInputsBar.barName}
                        onSubmit={this.onSubmitField}/> 
                </div > 
                <div className="actions" >
                    <div className="ui red cancel inverted button"
                        onClick={() => {this.setState({ didOpen: false })}}>
                        <i className="remove icon" > </i>
                        No 
                    </div> 
                    <div onClick={this.onConfirmChangeName}
                        className="ui green ok inverted button" >
                        <i className="checkmark icon"> </i>
                        Yes 
                    </div> 
                </div>    
            </Modal>)
        }
    }
                                
                                
export default ModalMenu