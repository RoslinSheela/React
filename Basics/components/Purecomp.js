import React, { Component } from 'react';
 
class PureComp extends Component {
    state = {  } 
    render() { 
        return <div>
            Im the pure component {this.props.name}
        </div>;
    }
}
 
export default PureComp;