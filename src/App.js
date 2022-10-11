import React, { Component } from 'react';
import path from 'path';

// We will create these two pages in a moment
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import NavBar from './components/NavBar';

import TextBlock from './components/TextBlock';
import LandingBlock from './components/LandingBlock';
import SocialsBlock from './components/SocialsBlock';
import ProjectBlock from './components/projects/ProjectBlock';
import ExpBlock from './components/experience/ExpBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
            <LandingBlock
              height = { 80 }
              id = { 1 }
            />
            <ProjectBlock
              height={100}
              id={2}
            />
            <ExpBlock />
            <SocialsBlock
              height={10}
              id={3}
            />
      </div>
    )
  };

}

export default App;