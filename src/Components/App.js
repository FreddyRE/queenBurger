import React from 'react'
import LoginForm from './LoginForm'
import MainMenu from './MainMenu'

const tagForUserNameField = "1_1"


class App extends React.Component {
    state = {
        'goToMainMenu':false, 
        'goToLogin' : true
    }
    
    renderHelper = () => {
        if(this.state.goToMainMenu){
            return <MainMenu />
        }

        if(this.state.goToLogin){
            return <LoginForm tagForUserName = {tagForUserNameField} logginHande={this.handleLogin}/>
        }

    }


    handleLogin = (prop) => {
        if(prop.signed) {
            this.setState({goToMainMenu:true, goToLogin:false})
        }
    }


    render() {
        return (this.renderHelper())
    }

};

export default App