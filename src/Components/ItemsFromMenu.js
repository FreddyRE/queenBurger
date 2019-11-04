import React from 'react'
import './ItemsFromMenu.css'

class ItemsFromMenu extends React.Component {

    state = {goBackToMainMenu:false}

    clickBeforeArrow = ()=>{

        this.setState({goBackToMainMenu:true}, ()=>{
            console.log(this.state)
        })
        
    }


    render() {
        return ( 
            <div > 
                <h3 className="ui block header">
                    <i 
                        className="arrow alternate circle left icon main-menu-go-back"
                        onClick={this.clickBeforeArrow}
                     
                    >
                    </i>
                </h3>
                <div className="header detail-menu-header">{this.props.items.menuNameSelected}</div>
                <div className="scrolling content">
                   {this.props.items.componentFromMenu}
                </div>
            </div>    
        )
    }
}

export default ItemsFromMenu