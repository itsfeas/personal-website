import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// We will create these two pages in a moment
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import NavBar from './components/NavBar';
import TextBlock from './components/TextBlock';
import ExperienceBlock from './components/ExperienceBlock';
import ProjectBlock from './components/projects/ProjectBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
            {/* <HomePage />; */}
            <TextBlock
              height = { 80 }
              id = { 1 }
            />;

            <ProjectBlock
              height={100}
              id={2}
            />;
            <TextBlock
              height={80}
              id={3}
            />;
      </div>
    )
  };

}

export default App;