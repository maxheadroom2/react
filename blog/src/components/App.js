import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import View from './View';


class App extends Component {
  render() {
    return (
      <div>
        <h1>hola mundo</h1>
        <hr/>
        <Link to="/home"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/View/1"> View 1 </Link>
        <Link to="/View/2"> View 2 </Link>
        <hr/>
        <Route path="/home" component={ Home }/>
        <Route path="/About" component={ About }/>
        <Route path="/View/:id" component={ View }/>
      </div>
    );
  }
}

export default App;
