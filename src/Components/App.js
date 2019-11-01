import React from 'react'
import LoginForm from './LoginForm'
import MainMenu from './MainMenu'

const tagForUserNameField = "1_1"

class App extends React.Component {

    render() {
        return ( 
            <div>
                <LoginForm tagForUserName = {tagForUserNameField}/>
                <MainMenu />
            </div>
            
        )
    }

};

export default App