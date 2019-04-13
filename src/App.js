import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'

class App extends Component {
  state = {
    person: [{name: 'Maria', age:23}]
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Main />
      </div>
    );
  }
}

export default App;
