
var friends = [
  {
    "name": "john",
    "photo": "ahmed@example.com",
   "scores":[1,
          2,
          3,
          5,
          1,
          2,
          4,
          5,
          3,
          2]
    
  },
  
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },

  {
    "name":"Jonas",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
