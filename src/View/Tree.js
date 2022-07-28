// imported Package
import React from 'react';

/**
 * Show Data as Tree Structure
 * @param {array} props
 * @returns
 */
const Tree = (props) => {
  // Destructure Props with Validation
  const { data = '' } = props || {};

  return (
    <ul>
      {
        /**
         * Mapping the Data get from props
         */
        data.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>

            {/* Forwarding the Children array as Props
            to this component so run this till children is there. */}
            <Tree data={item.children} />
          </div>
        ))
        }
    </ul>
  );
};

export default Tree;
