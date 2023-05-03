import React, { Component } from 'react';


class ClassProps extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h1>Hello {this.props.name} from { this.props.place} I am props</h1>
            <p> {this.props.children}</p>
            </div>
        );
    }
}
 
export default ClassProps;