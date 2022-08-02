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

  // if Data is not there return null
  if (!data) return null;

  /**
   * for Display Tree Structure using Recursion
   * @param {Array} carsData
   * @returns function
   */
  const recursiveFunc = (carsData) => {
    return carsData.map((item) => {
      return (
        <ul>
          <li>{item.displayName}</li>
          {item.children ? recursiveFunc(item.children) : null}
        </ul>
      );
    });
  };
  return recursiveFunc(data);
};

export default Tree;
