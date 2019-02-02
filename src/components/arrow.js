import React, { Component } from 'react';

class Arrow extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: false
        }
    }

    toggleArrow = function() {
        if(this.props.id !== "none"){
            this.props.callback(this.state.status);
            if(this.state.status){
                document.getElementById(this.id).classList.remove('arrow-closed')
            }
            else{
                document.getElementById(this.id).classList.add('arrow-closed')
            }
    
            this.setState({ status: !this.state.status });
        }
    }.bind(this);

    render(){
        this.id = `arrow-${this.props.id}`;
        return (
            this.props.id !== "none" ?
            <a id={this.id} onClick={() => this.toggleArrow()} className={`${this.props.className} arrow`}>

            </a>
            :
            ''
        )
    }
}

export default Arrow;