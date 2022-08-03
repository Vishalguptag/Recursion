// Package
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
   * @returns Node Elements
   */
  const recursiveFunc = (carsData) => {
    // Dispalay item of carsData using Map method
    return carsData.map((item) => {
      return (
        <ul key={item.id}>
          <li>{item.displayName}</li>
          {/* if Children find call this Function Recursively */}
          {item.children ? recursiveFunc(item.children) : null}
        </ul>
      );
    });
  };

  return recursiveFunc(data);
};
export default Tree;
