
var friends = require("../data/friends");



module.exports = function(app) {



app.post("/matchfriend", function(req, res){

  //var that will store the bestMatch
var bestMatch = [];
  
//convert the scores from string to number.
req.body.scores = req.body.scores.map(x => Number(x));

// Var that stores the reduced user score
var userScore = req.body.scores.map(x => Number(x)).reduce((x,y) => x + y,0);;

//array that  store the reduce score for the possible matches
var arrayOfFriends =[];

//for each that will go trough the friends object a reduced the score keeping the obj sintax
friends.forEach(x => arrayOfFriends.push({name: x.name, scores: x.scores.reduce((x,y) => x + y,0), photo: x.photo}));

// var that stores the BestMatch
bestMatch = friendfinder(userScore, arrayOfFriends);

//Send the Best Match to the Client-side 
res.send(bestMatch);

//Push the new user to the friends obj array
friends.push(req.body)



});


app.get("/api/friends", function(req, res) {
  res.json(friends);
});

};

// Function that finds the  friend

function friendfinder(userScore, arrayOfFriends){

//First mapped the array of friends keeping the obj sintax and repacing score with the diff between the user score and the possible friends score.
//Sort this mapped array in ASC.
//Shift to get the first element of the arr which will be the user with the lowest score.
return arrayOfFriends.map(x => ({name: x.name , score: Math.abs(x.scores - userScore), photo: x.photo})).sort((x,y) => x.score - y.score).shift();


}

