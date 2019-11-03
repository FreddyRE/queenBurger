import React from 'react'

class ItemsFromMenu extends React.Component {
    render() {
        return ( 
            <div > 
                <div className="header">Header</div>
                <div className="scrolling content">
                   {this.props.items}
                </div>
            </div>    
        )
    }
}

export default ItemsFromMenu