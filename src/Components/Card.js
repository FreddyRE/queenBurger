import React from 'react'

class Card extends React.Component {

    render() {
        return(
            <div className="ui centered card">
                <div className="image">
                    <img src={this.props.img}/>
                </div>
                <div className="content">
                    <a className="header">{this.props.title}</a>
                </div>
            </div>
        )
    }
    
}

export default Card