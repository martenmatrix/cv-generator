import './App.css';
import React, { Component } from 'react';
import CVGenerator from './Components/cv-gen';
import NavBar from './Components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {
        name: '',
        email: 'peter',
      }
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <CVGenerator />
      </div>
    );
  }
}

export default App;
