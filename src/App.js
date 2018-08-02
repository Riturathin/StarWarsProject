import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './Components/Login';
import Search from './Components/Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div className='row'>
          <Route path='/' exact component={ Login } />
          <Route path='/search' component={ Search } />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
