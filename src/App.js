import React from 'react';
import Title from './components/Title';
import Navigation from './components/Navigation';
import Main from './components/Main';
import './App.css';

class App extends React.Component {
  render () {
    return ( 
    
    <div className= 'app'>
      <Title />
      <Navigation />
      <Main />
    </div>
    
    );
    }
  }

export default App;
