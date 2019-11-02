import React from 'react'
import firebase from 'firebase'
import LoginForm from './LoginForm'
import MainMenu from './MainMenu'
import ClientForm from './ClientForm'


var firebaseConfig = {
    apiKey: "AIzaSyCt4Dp2ItfTzxE2aZf_HDI__xY_rj6ywSg",
    authDomain: "queenburger-c7f6e.firebaseapp.com",
    databaseURL: "https://queenburger-c7f6e.firebaseio.com",
    projectId: "queenburger-c7f6e",
    storageBucket: "queenburger-c7f6e.appspot.com",
    messagingSenderId: "1025656960806",
    appId: "1:1025656960806:web:3de5524869c7eb5393f3e7"
};


firebase.initializeApp(firebaseConfig);



class App extends React.Component {
    state = {
        'goToMainMenu':false, 
        'goToLogin' : false,
        'goToClientName' : true,
        'clientName' : 'TestName'
    }
    
    renderHelper = () => {
        if(this.state.goToMainMenu){
            return <MainMenu nameClient = {this.state.clientName}/>
        }
        if(this.state.goToLogin){
            return <LoginForm logginHande={this.handleLogin}/>
        }
        if(this.state.goToClientName){
            return <ClientForm nameClientHandle={this.handleNameClient}/>
        }

    }

    handleNameClient = (prop) =>{
        if(prop.readyForOrder){
            this.setState({goToClientName:false, goToMainMenu:true, clientName:prop.nameClient})
        }
    }

    handleLogin = (prop) => {
        if(prop.signed) {
            this.setState({goToLogin:false, goToClientName:true})
        }
    }


    render() {
        return (this.renderHelper())
    }

};

export default App