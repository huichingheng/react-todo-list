import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor() {
        super();
        this.state = {
            name: "World"
        };
    }
    render() {
        return <h1>Hello, {this.state.name}!</h1>
    }
}
 export default HelloWorld
