import React, { Component } from 'react';
import UpdatedComp from "./HigherOrder";
class Click extends Component {
    state = { 
        count :0
     } 
     UpdateClick =()=>{
               this.setState({count: this.state.count+1});
            };
    render() { 
        const{count}=this.state;
        return (
            <div>
               <button onClick={this.UpdateClick}>
               {this.props.name} Clicked {count} times
                </button>
            </div>

        );
    }
}
//const newComp = higherOrderComponent(originalComp) 
export default UpdatedComp(Click);//UpdatedComp is a higherOrder function