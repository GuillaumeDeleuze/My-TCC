import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes />
      </header>
    </div>
  );
}

export default App;
