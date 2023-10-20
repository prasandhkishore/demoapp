import React, { Component } from 'react';
import {Link } from 'react-router-dom'
class Nav extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <ul>
                    <li><Link to="task">Task</Link></li>
                </ul>                
            </div>
         );
    }
}
 
export default Nav;