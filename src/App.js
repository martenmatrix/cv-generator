import './App.css';
import React, { Component } from 'react';
import CVGenerator from './Components/cv-gen';

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="title">CV Generator</h1>
    </div>
  )
}

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
