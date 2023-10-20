import React, { Component } from 'react';
const HOC = (OrginalComponent) =>{
    return class ModifiedComponent extends Component {
        constructor(props) {
            super(props);
            this.state={
                count:0
            }
        } 
    }
}
