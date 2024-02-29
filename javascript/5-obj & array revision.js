// let user1 = {
//   name: "ram",
//   age: 20,
//   phone: {
//     ncell: "98xx",
//     ntc: "96xx",
//   },
// };

let users = [
  {
    name: "ram",
    age: 20,
    phone: {
      ncell: "98xx",
      ntc: "96xx",
    },
  },
  {
    name: "ram",
    age: 20,
    phone: {
      ncell: "abcd", // change this to 9849392201
      ntc: "9678xx",
    },
  },
];

console.log(users[1].phone.ncell);
users[1].phone.ncell = 9849392201;

console.log(users);

//  Create an array of courses having multiple students in

let courses = [
  {
    name: "mern",
    students: [
      {
        name: "ram",
        age: 20,
        phones: [
          {
            number: "98xx",
            provider: "ntc",
          },
          {
            number: "96xx",
            provider: "ncell",
          },
          {
            number: "96xx",
            provider: "smart",
          },
        ],
      },
    ],
  },
  {
    name: "python",
    students: [
      {
        name: "sam",
        age: 29,
        phones: [
          {
            number: "98xx",
            provider: "ntc",
          },
          {
            number: "96xx",
            provider: "ncell",
          },
          {
            number: "96xx",
            provider: "smart",
          },
        ],
      },
    ],
  },
];

console.log(courses[1].students[0].phones[2].provider);
