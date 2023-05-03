import React, { Component } from 'react';

class RegComp extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                Im a regular comp {this.props.name}
            </div>
        );
    }
}
 
export default RegComp;