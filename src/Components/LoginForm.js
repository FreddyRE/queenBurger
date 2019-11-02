import React from 'react'
import TextInputBar from './TextInputBar'
import SubmitButton from './SubmitButton'
import firebase from 'firebase'
import './LoginForm.css'

var settingsInputsBar = {

    classNameModalLogin: 'modal-login',

    bar1: {
        name: "userName",
        id: "userNameInput",
        placeholder: "nombre de usuario",
        iconName: "user",
        toUpperCase: true,
        isForUserName: true
    },

    bar2: {
        name: "password",
        id: "passInput",
        placeholder: "Password",
        iconName: "lock",
        type: "password"
    }

}

class LoginForm extends React.Component {

    state = {
        isUserNameCorrect: false,
        userNameCorrect: "",
        dataForCheckOnSubmit: '',
        signed: false,
        modalClassName: settingsInputsBar.classNameModalLogin
    }


    onSubmitField = (term) => {

        if (term.isTagToCheckInSubmit) {
            this.setState({ dataForCheckOnSubmit: term.inputText })
        }

        firebase.database().ref("users/").once("value").then((snapshot) => {
            let getVals = Object.values(snapshot.val())

            for (var element in getVals) {

                if (term.isTagToCheckInRealTime) {
                    if (getVals[element].userName.toUpperCase() === term.inputText) {
                        settingsInputsBar.bar1.iconName = "check green"
                        term.errorClassName = ""
                        this.setState({ isUserNameCorrect: true, userNameCorrect: Object.keys(snapshot.val())[parseInt(element)] })
                        break;
                    } else if (parseInt(element) === getVals.length - 1) {
                        settingsInputsBar.bar1.iconName = "user"
                        term.errorClassName = "error"
                        this.setState({ isErrorClassSet: true })
                    }
                }
            };
        })

    }

    onSubmitBtn = (term) => {

        if (term.wasClicked) {
            if (this.state.isUserNameCorrect) {
                firebase.database().ref(`users/${this.state.userNameCorrect}`).once("value").then((snapshot) => {
                    if (snapshot.val().pass === this.state.dataForCheckOnSubmit) {
                        this.setState({ signed: true })
                        this.props.logginHande(this.state)
                    } else {
                        alert("favor de verificar el password")
                    }
                })
            } else {
                alert("favor verifica tu nombre de Usuario")
            }
        }

    }

    render() {

        return ( 
            <div className = { `ui center aligned grid ${settingsInputsBar["classNameModalLogin"]}`}>
                <div className = "column" >
                    <h2 className = "ui teal image header" >
                        <div className = "content" > Ingreso </div> 
                    </h2 > 
            
                    <form className = "ui large form" >
                        <div className = "ui stacked segment" >
                            <TextInputBar settings = { settingsInputsBar.bar1 }
                                onSubmit = { this.onSubmitField }
                                formNo = "1_1" />
                            <TextInputBar settings = { settingsInputsBar.bar2 }
                                onSubmit = { this.onSubmitField }
                                formNo = "1_2" />
                            <SubmitButton title = "Login"
                                formNo = "1_3"
                                onClickSubmit = { this.onSubmitBtn }/> 
                        </div> 
                        <div className = "ui error message" > </div> 
                    </form >

                    <div className = "ui message" > ¿olvidaste tu password ? < a href = "" > Reset </a> 
                    </div> 
                </div> 
            </div >
        )
    }

}

export default LoginForm