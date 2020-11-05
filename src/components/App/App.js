import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (

      <Router>
          <div>
            <h1>Giphy Search!</h1>
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

export default App;
