import React from 'react';
import Home from './Home';
import Books from './Books';
import NavBar from './navigation/NavBar';
import '../style/main.scss';

function App() {
  return (
    <div className= "app-wrapper">
      <NavBar />
      <Home />
      <Books />
    </div>
  );
}

export default App;