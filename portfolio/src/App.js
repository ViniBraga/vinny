import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Content from './components/Content';
import './css/pure-min.css';
import './css/marketing.css';

class App extends Component {
  render() {
    return (
      <div className="layout">
          <Header/>
          <Home/>
          <Content/> 
      </div>
    );
  }
}

export default App;
