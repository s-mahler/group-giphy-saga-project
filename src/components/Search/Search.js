import React, { Component } from 'react';
// import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

class Search extends Component {

    state = {
        newSearch: ''
    }

    // componentDidMount = () => {
    //     this.addNewSearch('test');
    // }

    handleChange = event => {
        console.log('event happended')
        this.setState({
            newSearch: {
                newSearch: event.target.value,
            }
        });
    }

    addNewSearch = () => {
        console.log(this.state.newSearch);
        this.props.dispatch({type: 'FETCH_GIFS', payload: this.state.newSearch });
    }

    addFavorite = (gifUrl) => {
        console.log('clicked');
        this.props.dispatch({type: 'ADD_FAVORITE', payload: gifUrl});
    }

    render() {
        return (
    
            <div>
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.addNewSearch}>Search for a new GIF</button>
                <ul>
                    {this.props.reduxState.gifReducer.map((gif, index) => {
                        return <li key={index}><img alt={index} src={gif.images.preview_gif.url}/><button onClick={() => this.addFavorite(gif.images.preview_gif.url)}>Favorite</button></li>;
                    })}
                </ul>
            </div>

        );
    }

}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Search);