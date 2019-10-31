import React from 'react'
import '../LoginForm.css'
import TextInputBar from './TextInputBar'
import SubmitButton from './SubmitButton'

var settingsInputsBar = {
    bar1 : {
        name : "userName",
        id : "userNameInput",
        placeholder : "nombre de usuario",
        iconName : "user",
        toUpperCase : true
    }, 

    bar2 : {
        name : "password",
        id : "passInput",
        placeholder : "Password",
        iconName : "lock",
        type : "password"
    }
    
}

const LoginForm = (props) =>{
    return(
        <div className="ui center aligned grid">
            <div className="column">
                <h2 className="ui teal image header">
                    <div className="content">Ingreso</div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                       
                        <TextInputBar settings={settingsInputsBar.bar1}/>
                        <TextInputBar settings={settingsInputsBar.bar2}/>
                        <SubmitButton title="Login"/>
                    </div>
                    <div className="ui error message"></div>
                </form>
                
                <div className="ui message">
                    ¿olvidaste tu password? <a href="">Reset</a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm