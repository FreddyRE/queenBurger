import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import './ItemsFromMenu.css'
import ModalMenu from './ModalMenu'

class ItemsFromMenu extends React.Component {

    state = {goBackToMainMenu:false, addItemConfirmation:false}

    clickBeforeArrow = ()=>{

        this.setState({goBackToMainMenu:true}, ()=>{
            this.props.handleItemReturn(this.state)
        })
        
    }

    render() {
        return ( 
            <div > 
                <h3 className="ui block header main-interface">
                    <Dropdown icon='plus square outline' direction='right' style={{color:'purple'}}>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Checkout' />
                            <Dropdown.Item text='Cerrar sesion' />
                        </Dropdown.Menu>
                    </Dropdown>                    
                </h3>
                <ModalMenu 
                    modalShouldOpen={true} 
                    />
                <i 
                    className="arrow alternate circle left icon main-menu-go-back big"
                    onClick={this.clickBeforeArrow}
                >
                </i>
                <div className="header detail-menu-header">{this.props.items.menuNameSelected}</div>
                <div className="scrolling content">
                   {this.props.items.componentFromMenu}
                </div>
            </div>    
        )
    }
}

export default ItemsFromMenu