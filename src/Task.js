import React, { Component } from 'react';


class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  setName(name) {
    this.setState({
      name: name
    });
  }

  handleSubmit = () => {
    const textBoxValue = document.querySelector('input[name="textBoxValue"]').value;
    this.setName(textBoxValue);
  }

  handleReset = () => {
    document.querySelector('input[name="textBoxValue"]').value = '';
    this.setName(document.querySelector('input[name="textBoxValue"]').value);
  }

  render() {
    return (
      <div className='main'>
        <div className='container'>
            <p style={{paddingTop:'100px' }}>Enter your name: <input type="text" name='textBoxValue' placeholder="Enter your name" /></p>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
            <button type="button" onClick={this.handleReset}>Reset</button>
            <h2>
            Hiiii! <span style={{ color: 'red' }}>{this.state.name}</span> <br />Welcome to React JS
            </h2>
        </div>
        
      </div>
    );
  }
}

export default Task;
