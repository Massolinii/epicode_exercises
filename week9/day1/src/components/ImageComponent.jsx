import React, { Component } from 'react';

class ImageComponent extends Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.description} className="App-logo"/>
    );
  }
}

export default ImageComponent;