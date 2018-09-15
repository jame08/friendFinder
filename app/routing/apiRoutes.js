
var friends = require("../data/friends");


module.exports = function(app) {



app.post("/matchfriend", function(req, res){

  
req.body.score = req.body.score.map(x => Number(x));
friends.push(req.body)
console.log(friends);

});

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

};



