import React from 'react';
import './App.css';
import { Canvas } from './containers/Canvas';
import { Toolbar } from './containers/Toolbar';

function App() {
  return (
    <React.Fragment>
      <Canvas />
      <Toolbar />
    </React.Fragment>
  );
}

export default App;
