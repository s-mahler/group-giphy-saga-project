import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search';

class App extends Component {

  getGifs = () => {
    this.props.dispatch({type: 'FETCH_GIFS'});
  }

  render() {
    return (

      <Router>
          <div>
            <Route exact path= "/search" component ={Search}/>
            <Route path="/favorites" component ={Favorite}/>
            <h1>Giphy Search!</h1>
            <input type="text"></input>
            <button>Search for a new GIF</button>
          </div>
      </Router>
 

    );
  }
  
}

export default connect()(App);
