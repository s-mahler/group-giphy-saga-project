import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search';

class App extends Component {


  render() {
    return (

      <Router>
          <div>
            <Route exact path= "/search" component ={Search}/>
            <Route path="/favorites" component ={Favorite}/>
            <h1>Giphy Search!</h1>
          </div>
      </Router>
 

    );
  }
  
}

export default connect()(App);
