import React, { Component } from 'react';
import UpdatedComp from "./HigherOrder";
class Counter extends React.Component {
    state = { 
        x: 0
     } 
     IncrementCount=()=>{
        this.setState({ x: this.state.x+1});
     };
    render() { 
        const{x} = this.state;
        return (
            <div>
                <button onMouseEnter={this.IncrementCount}>
                    {this.props.name} incremented to {x}
                </button>
            </div>
        );
    }
}
 
export default UpdatedComp(Counter); 