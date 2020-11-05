import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
          <div>
            <h1>Giphy Search!</h1>
          </div>
          <Route exact path= "/search" component ={Search}/>
          <Route path="/favorites" component ={Favorite}/>
      </Router>
    );
  }
  
}

export default App;
