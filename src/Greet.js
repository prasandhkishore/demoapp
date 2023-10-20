import {Component} from 'react';
class Greet extends Component {
    constructor(props){
        super(props);
        this.state ={
            
        }
    }

    changeName(event){
        this.setState({
            name: event.target.value
        })
    }

    render() { 
        return (
            
            <div>               
                <h2 style={{paddingTop:'100px'}}>Inside the Greet Component</h2>
                </div>
            );
    }
}
 
export default Greet;

