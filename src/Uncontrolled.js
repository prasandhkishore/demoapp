import React, { Component } from 'react';

class Uncontrolled extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    
    handleSubmit(event){
        alert("You have successfully submitted - Uncontrolled");
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <h1>Uncontrolled Form</h1>
                 <label>Name: <input type="text" ref={this.input}/></label>
                 <label>Address: <input type="text"  ref={this.input}/></label>
                 <button type="submit">Submit</button>

            </form>
         );
    }
}
 
export default Uncontrolled;