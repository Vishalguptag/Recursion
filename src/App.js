// imported Package
import React from 'react';

// imported Component
import ConvertObjectToArray from './ConvertObjectToArray';

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
