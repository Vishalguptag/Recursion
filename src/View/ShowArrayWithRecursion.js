// imported Packages
import React from 'react';

// imported fake data
import favMovies from '../FakeData/FakeDataInArray';

/**
 * Show items of array using Reacursion
 * @returns a tree like structure
 */
const ShowArrayWithRecursion = () => {
  /**
   * In this using reduce method to get the flatten array
   * @param {array} data passed as parameter to apply forEach method
   * @returns
   */
  const flattenAgain = (items) => {
    const flat = [];

    items.forEach((item) => {
      flat.push(item);
      if (Array.isArray(item.children) && item.children.length > 0) {
        flat.push(...flattenAgain(item.children));
      }
    });
    return flat;
  };

  // calling a function to store the result of this function
  const resultWithFlattenArray = flattenAgain(favMovies);
  return (
    <div>
      {/* Mapping the array using map method */}
      {resultWithFlattenArray.map((ele) => (
        <div key={ele.id}>
          <ul key={ele.id}>
            <li>{ele.name}</li>
            {ele.children.map((child) => (
              <ul key={child.id}>
                <li>{child.name}</li>
              </ul>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShowArrayWithRecursion;
