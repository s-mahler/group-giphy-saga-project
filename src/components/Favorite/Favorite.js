import React, { Component } from 'react';
// import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

class Favorite extends Component {

    render() {
        return (
    
              <div>
                  <p>Favorite</p>
              </div>

        );
    }

}



export default connect()(Favorite);