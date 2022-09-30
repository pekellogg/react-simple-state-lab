import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super();
    this.state = { color: props.value };
  }
  
  handleClick = () => {
    this.setState({ color: '#333' })
  }
  
  render() {
    return (
      <div 
        className="cell"
        // CSS property syntax
        style={ { backgroundColor: this.state.color } }
        // listener with hook
        onClick={ this.handleClick }>
      </div>
    );
  };
  
}