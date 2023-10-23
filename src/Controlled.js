import React, { Component } from 'react';
class Controlled extends Component {
    constructor(props) {
        super(props);

        this.state={
            value:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit(event){
        alert("You have successfully submitted "+this.state.value);
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <h1>Controlled Form</h1>
                 <label>Name: <input type="text" value={this.state.value} onChange={this.handleChange}/></label>
                 <button type="submit">Submit</button>

            </form>
         );
    }
}
 
export default Controlled;