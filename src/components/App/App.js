import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

  getGifs = () => {
    this.props.dispatch({type: 'FETCH_GIFS'});
  }

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
      </div>
    );
  }
  
}

export default connect()(App);
