// imported Pckage
import React from 'react';

// imported Component
import Tree from './Tree';

// imported FakeData
import favMovies from '../FakeData/FakeDataInArray';

/**
 * Component use to forward the Data as props to its children component
 * @returns node
 */
const PassData = () => (
  <div>
    {/* Forward Data to Tree component */}
    <Tree data={favMovies} />
  </div>
);
export default PassData;
