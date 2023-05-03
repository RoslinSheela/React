import React, { Component } from 'react';

class NewComp extends Component {
    constructor(props){
        super(props)

        this.state ={
            message: "subscribe",
            sub: "subscribe pls",
            msg: "Pls hit subscribe"
        }
    }
    styles ={
        fontStyle : "italic",
        color: "blue"
      }
    Buttonchange = () =>{
        this.setState({
            message: "Hit the bell icon",
            sub: "Subscribed",
            // msg: "Thank You"
        })
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({msg: "thank You"});
        },3000);
      }

    
    render() { 
        return (
            <div className='App'>
                <h3 style={this.styles}> {this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <br></br>
                <button onClick ={this.componentDidMount}>{this.state.msg}</button>
            </div>
        );
    }
}
 
export default NewComp;