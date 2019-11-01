import React from 'react'
import LoginForm from './LoginForm'


const tagForUserNameField = "1_1"

class App extends React.Component {

    render() {
        return ( <
            LoginForm tagForUserName = {tagForUserNameField}/ >
        )
    }

};

export default App