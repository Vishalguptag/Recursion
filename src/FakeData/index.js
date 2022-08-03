// It is Vehicle Data which is use for Displaying Tree Structure.
const Cars = {
  id: 1,
  parentId: 0,
  displayName: 'Vehicles',
  children: {
    twoWheeler: {
      id: 2,
      parentId: 1,
      displayName: 'Two Wheeler',
      children: {
        Honda: {
          id: 4,
          parentId: 2,
          displayName: 'Honda',
          children: {
            Bikes: {
              id: 7,
              parentId: 4,
              displayName: 'HF',
            },
          },
        },
      },
    },
    fourWheeler: {
      id: 3,
      parentId: 1,
      displayName: 'Four Wheeler',
      children: {
        tata: {
          id: 5,
          parentId: 3,
          displayName: 'Tata',
          children: {
            id: 8,
            parentId: 5,
            displayName: 'SomeParts',
            children: {},
          },
        },
      },
    },
  },
};
export default Cars;
