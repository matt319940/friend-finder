var friends = require("../data/friends.js")

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    var totalDifference = 50;
    var match = friends[0];


    for(var i = 0; i < friends.length - 1; i++){
      var totalDifferenceTemp = 0;

      for(var j = 0; j < 10; j++){
        var friendScore = friends[i].scores[j];
        var newFriendScore = newFriend.scores[j];
        totalDifferenceTemp += Math.abs(friendScore - newFriendScore);
      }
      if(totalDifferenceTemp < totalDifference){
        totalDifference = totalDifferenceTemp;
        match = friends[i];
      }
    }
    res.json(match);
  });

}