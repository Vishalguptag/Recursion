// Packages
import React from 'react';

// FakeData of nested Objects
import Cars from '../../FakeData';

// Component
import Tree from '../../Views/TreeView/Tree';

const ConvertObjectToArray = () => {
  // Use to Store Flatten Object
  const flattenObjectIntoArray = [];

  /**
   * Method to convert a nested object to flat array of object
   * @param {object} nestedObj
   * @returns Array
   */
  const recursiveCall = (nestedObj) => {
    // Constant to push in array with key and value
    const data = {};

    /**
     * convert nested object to flatten object using Keys method and forEach loop
     */
    Object.keys(nestedObj).forEach((item) => {
      // store value of every key in object
      const value = nestedObj[item];

      /**
       * if find value is object then call again recursiveCall Method with children object
       * if not object push values in constant array
       */
      if (typeof value === 'object') {
        // Calling Recursively when object is find
        return recursiveCall(value);
      }
      data[item] = value;
      return flattenObjectIntoArray.push(data);
    });
  };
  // calling method
  recursiveCall(Cars);
  /**
   * Removing Diplicates Values
   * @param {array} finalArr
   * @return Array
   */
  const removeDuplicates = flattenObjectIntoArray.reduce((finalArr, item) => {
    // checking Duplicates Values using id
    const duplicateFind = finalArr.find((key) => {
      return key.id === item.id;
    });

    // if Duplicate Values Find return finalArr
    if (duplicateFind) {
      return finalArr;
    }
    // if false than concat item with finalArr
    return finalArr.concat([item]);
  }, []);
  // Storing index of every item
  const idMapping = removeDuplicates.reduce((acc, element, index) => {
    acc[element.id] = index;
    return acc;
  }, {});
  // Flatten Array to tree Array of object
  const nestedObjectToArrayOfObject = () => {
    let root;
    removeDuplicates.forEach((element) => {
      // Handle the root element
      if (element.parentId === 0) {
        root = [element];
        return;
      }
      // Use our mapping to locate the parent element in our data array
      const parentEl = removeDuplicates[idMapping[element.parentId]];

      // Add our current el to its parent's `children` array
      parentEl.children = [...(parentEl.children || []), element];
    });
    return root;
  };
  const finalResult = nestedObjectToArrayOfObject();

  return (
    <div>
      {/* Passing Data as Props to Tree Component */}
      <Tree data={finalResult} />
    </div>
  );
};
export default ConvertObjectToArray;
