import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';

class App extends Component {

  state = {
    isLogged: true
  };

  render() {
    return (
      <div className='app'>
        <Routes isLogged={this.state.isLogged}/>
      </div>
    );
  }
}

export default App;
