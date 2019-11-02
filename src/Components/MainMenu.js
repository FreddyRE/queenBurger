import React from 'react'
import Card from './Card'
import firebase from 'firebase'
import './MainMenu.css'

const keysForDB = {
    menus :{
        Desayunos : "desayunos",
        "Menu Carta" : "carta"
    }
}


class MainMenu extends React.Component{
    
    onPerformSelection =(data) =>{
        firebase.database().ref(`menus/${keysForDB.menus[data.divSelected]}`).once("value").then((snapshot) => {
            console.log(snapshot.val())
        })

    }

    render() {
        return(
            <div className="menu-selector">
                <div className="name-user">Orden de: {this.props.nameClient} </div>
                <Card 
                    img="./img/menu_main/desayuno.jpg" 
                    title={"Desayunos"} 
                    onSelectedItem={this.onPerformSelection}/>
                <Card
                    onSelectedItem={this.onPerformSelection}
                    img ="./img/menu_main/menu.jpg" 
                    title= {"Menu Carta"}/>
            </div>
        )
    }
}

export default MainMenu