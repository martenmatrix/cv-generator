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
    
    this.replace = this.replace.bind(this);
  }

  replace() {
    this.setState({
      information: {
        name: 'marten',
      }
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        <input type="password" onChange={this.replace}></input>
        <NavBar />
        <CVGenerator />
      </div>
    );
  }
}

export default App;
