import { Link } from 'react-router-dom';

export default [
  {
    name: "Item1",
    icon: "X",
    url: "#item1"
  },
  {
    name: "Item2",
    icon: "X",
    url: "#item2"
  },
  {
    name: "Item3",
    children: [
      {
        name: "Child31",
        url: "#child31"
      },
      {
        name: "Child32",
        url: "#child32"
      },
      {
        name: "Child32",
        url: "#child32"
      }
    ]
  },
  {
    name: "Item4",
    children: [
      {
        name: "Child41",
        url: "#child41"
      },
      {
        name: "Child42",
        url: "#child42"
      },
      {
        name: "Child43",
        children: [
          {
            name: "Child431",
            url: "#child431"
          },
          {
            name: "Child432",
            url: "#child432,"
          },
          {
            name: "Child433",
            url: "#child433"
          }
        ]
      }
    ]
  }
];
