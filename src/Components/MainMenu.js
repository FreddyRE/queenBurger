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

    state = {'itemsLoaded':null}

    onPerformSelection =(data) =>{
        firebase.database().ref(`menus/${keysForDB.menus[data.divSelected]}`).once("value").then((snapshot) => {
            let namesMenu = Object.values(snapshot.val())

            const newCards = namesMenu.map((elements, key)=>{
                return(
                    <Card
                    key = {key}
                    extraClass = "menu-card-main" 
                    img="./img/menu_main/desayuno.jpg" 
                    title={elements.nombre_comercial}
                    description = {`$${elements.precio} MXP`}
                    extraClassDescription = "precio-items"
                    onSelectedItem={this.onPerformSelection}/>
                )
            })

            this.setState({itemsLoaded:newCards})
            this.props.handleSelection(this.state)
        })

    }

    render() {
        return(
            <div className="menu-selector">
                <div className="name-user">Orden de: {this.props.nameClient} </div>
                <Card
                    extraClass = "menu-card-main" 
                    img="./img/menu_main/desayuno.jpg" 
                    title={"Desayunos"} 
                    onSelectedItem={this.onPerformSelection}/>
                <Card
                    extraClass = "menu-card-main" 
                    onSelectedItem={this.onPerformSelection}
                    img ="./img/menu_main/menu.jpg" 
                    title= {"Menu Carta"}/>
            </div>
        )
    }
}

export default MainMenu