import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// We will create these two pages in a moment
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import NavBar from './components/NavBar';
import Block from './components/Block';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
            {/* <HomePage />; */}
            <Block
              height = { 80 }
              id = { 1 }
            />;

            <Block
              height={100}
              id={2}
            />;
      </div>
    )
  };

}

export default App;