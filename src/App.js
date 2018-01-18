import React, { Component } from 'react';
import VerticalPane from './containers/VerticalPane/VerticalPane';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <VerticalPane />
      </div>
    );
  }
}

export default App;
