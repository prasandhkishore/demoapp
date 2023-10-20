import React, { Component } from 'react';
class Label extends Component {
    constructor(props) {
        super(props);

        this.state={
            count: 0
        }
    }
    incrementCounter=()=> {
        this.setState({
            count: this.state.count + 1
          });
    }
    render() { 
        return ( 
            <div>                
                <p onMouseOver={this.incrementCounter}>count: {this.state.count}</p>
            </div>
         );
    }
}
 
export default Label;