import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Advertisments from './containers/Advertisments/Advertisments';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout />
      <Advertisments />
      </div>
    );
  }
}

export default App;
