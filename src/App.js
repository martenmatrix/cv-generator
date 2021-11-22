import React from 'react';
import CVGenerator from './Components/cv-gen';
import NavBar from './Components/navbar';


function App() {
    return (
        <div className="app">
          <NavBar />
          <CVGenerator />
        </div>
      );
}

export default App;
