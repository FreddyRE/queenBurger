import React from 'react'

class Card extends React.Component {

    state = {divSelected:'', openModal:false}
    onPerformItemSelection = (item)=>{
        console.log(item)
     }
    render() {
        return(
            <div className={`ui centered card ${this.props.extraClass}`}
                onClick = {()=>{
                    if(this.props.openModal){
                        this.setState({openModal:true},()=>{

                        })       
                    }
                    this.setState({divSelected:this.props.title}, ()=>{
                        this.props.onSelectedItem(this.state)
                    }) 
                }}
            >
                <div className="image">
                    <img src={this.props.img}/>
                </div>
                <div className="content">
                    <a className="header">{this.props.title}</a>
                </div>
                <div className={`description ${this.props.extraClassDescription}`}>
                    {this.props.description}
                </div>
                {this.props.attachedButton}
               
            </div>
        )
    }
    
}

export default Card