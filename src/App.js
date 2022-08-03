// Package
import React from 'react';

// Helper for Display Tree Structure
import ConvertObjectToArray from './Utils/Helpers/ConvertObjectToArray';

/**
 * App is Displaying main Component
 * @returns Node Elements
 */
const App = () => {
  return (
    <div className="App">
      <h1>Details of City and Info</h1>
      <ConvertObjectToArray />
    </div>
  );
};

export default App;
