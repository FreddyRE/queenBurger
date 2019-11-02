import React from 'react'

class TabBtn extends React.Component {

    state = {wasCllicked:false}

    render() {
        return(
            <div
                onClick={()=>{
                    this.setState({wasCllicked:true}, ()=>{
                        this.props.onClickElement(this.state)
                    })
                }}>
                <div className="ui animated button" tabIndex="0">
                    <div className="visible content">Next</div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default TabBtn