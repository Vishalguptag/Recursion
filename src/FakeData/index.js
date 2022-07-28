// Fake Data for App
const carTypes = {
  id: 1,
  displayName: 'Root',
  children: {
    twoWheeler: {
      id: 2,
      displayName: 'Two Wheeler',
      children: {
        Honda: {
          id: 4,
          displayName: 'Honda',
          children: {
            Bike: 'test',
          },
        },
      },
    },
    fourWheeler: {
      id: 3,
      displayName: 'Four Wheeler',
      children: {
        tata: {
          id: 5,
          displayName: 'Tata',
          children: {},
        },
      },
    },
  },
};

export default carTypes;
