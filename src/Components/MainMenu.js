import React from 'react'
import Card from './Card'
import faker from 'faker'
import './MainMenu.css'

class MainMenu extends React.Component{
    
    render() {
        return(
            <div className="menu-selector">
                <Card img={faker.image.food()} title={"Desayuno"}/>
                <Card img ={faker.image.abstract()} title= {"Menu Carta"}/>
            </div>
        )
    }
}

export default MainMenu