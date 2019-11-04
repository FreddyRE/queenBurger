import React from 'react'
import Card from './Card'
import firebase from 'firebase'
import {Dropdown, Menu} from 'semantic-ui-react'
import './MainMenu.css'
import ModalMenu from './ModalMenu'
import Modal from 'react-modal'


const keysForDB = {
    menus :{
        Desayunos : "desayunos",
        "Menu Carta" : "carta"
    }
}
Modal.setAppElement('#root')

class MainMenu extends React.Component{

    _isMounted = false 

    componentDidMount(){
        console.log("mounted")
        this._isMounted = true
    }

    componentWillUnmount(){
        console.log("unmount")
        this._isMounted = false
    }

    state = {
        'itemsLoaded':null, 
        'menu_name':undefined, 
        modalChangeNameOpen:false, 
        clientName:this.props.nameClient,
        addItemConfirmation:false,
    }

    openModal = () =>{
        this.setState({modalChangeNameOpen: true}, ()=>{
        });
    }
   
    onPerformItemSelection = (item)=>{
       this.setState({addItemConfirmation:true})
    }


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
                        onSelectedItem={this.onPerformItemSelection}
                        openModal = {true}
                    />
                )
            })

            this.setState({itemsLoaded:newCards, menu_name:data.divSelected})
            this.props.handleSelection(this.state)
        })

    }

    handleChangeName=(name)=>{
        this.setState({clientName:name}, ()=>{
            this.setState({modalChangeNameOpen:false})
        })
    }

    render() {
        return(
            <div className="menu-selector">
                <h3 className="ui block header main-interface">
                        <Dropdown icon='plus square outline' direction='right' style={{color:'purple'}}>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Checkout' />
                                <Dropdown.Item text='Cerrar sesion' />
                            </Dropdown.Menu>
                        </Dropdown>                    
                </h3>
                <ModalMenu 
                    modalShouldOpen={this.state.modalChangeNameOpen} 
                    onChangeName = {this.handleChangeName}
                    />
                <div className="name-user">Orden de: <span
                        onClick ={this.openModal}
                    >{this.state.clientName}</span> </div>
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