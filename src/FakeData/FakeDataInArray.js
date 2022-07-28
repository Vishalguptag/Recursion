const favMovies = [
  {
    id: 12,
    level: 1,
    name: 'Locations',
    parentId: null,
    children: [
      {
        id: 1,
        parentId: 12,
        level: 2,
        name: 'U.S.',
        children: [
          {
            id: 15,
            parentId: 1,
            level: 3,
            name: 'Cities',
            Area: [],
            children: [
              {
                id: 16,
                parentId: 15,
                level: 4,
                name: 'New York',
                children: [],
              },
              {
                id: 17,
                parentId: 15,
                level: 4,
                name: 'Chicago',
                children: [
                  {
                    id: 18,
                    parentId: 17,
                    level: 5,
                    name: 'NH-3506',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        parentId: 12,
        level: 2,
        name: 'Canada',
        children: [],
      },
      {
        id: 3,
        parentId: 12,
        level: 2,
        name: 'London',
        children: [
          {
            id: 19,
            parentId: 3,
            level: 3,
            name: 'LJ-5584',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    level: 1,
    name: 'Benefits',
    parentId: null,
    children: [
      {
        id: 4,
        level: 2,
        parentId: 13,
        name: 'U.S. Benefits',
        children: [
          {
            id: 5,
            level: 3,
            parentId: 4,
            name: 'U.S. Benefits at a Glance',
            children: [],
          },
          {
            id: 6,
            level: 3,
            parentId: 4,
            name: 'U.S. Holiday Calendar',
            children: [],
          },
        ],
      },
      {
        id: 7,
        level: 2,
        parentId: 13,
        name: 'London Benefits',
        children: [
          {
            id: 8,
            level: 3,
            parentId: 7,
            name: 'London Benefits at a Glance',
            children: [],
          },
          {
            id: 9,
            level: 3,
            parentId: 7,
            name: 'London Holiday Calendar',
            children: [],
          },
        ],
      },
      {
        id: 10,
        level: 2,
        parentId: 13,
        name: 'India Benefits',
        children: [
          {
            id: 11,
            level: 3,
            parentId: 10,
            name: 'India Benefits at a Glance',
            children: [],
          },
          {
            id: 14,
            level: 3,
            parentId: 10,
            name: 'India Holiday Calendar',
            children: [],
          },
        ],
      },
    ],
  },
];

export default favMovies;
