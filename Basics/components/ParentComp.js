import React, { Component } from 'react';
import PureComp from './Purecomp';
import RegComp from './RegComp';

class ParentComp extends Component {
    state = {
        name :"spllilearn"
      } 
      componentDidMount(){
        setInterval(()=>{
            this.setState({name: this.state.name});
        },3000);
      }
    render() { 
        return ( 
            <div>
                Im a parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        );
    }
}
 
export default ParentComp;