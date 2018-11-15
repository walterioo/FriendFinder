const path = require("path"),
    express = require("express"),
    router = express.Router();

var friends = require("../data/friends");

var defaultArray = friends.friendsArray;

router
    .get("/friends", (req, res) => {
        //res.send("Api Friends");
        res.json(friends.friendsArray);
    })
    .post("/friends", (req, res) => {
        console.log("Post succesful");
        let newFriend = req.body;
        let match = bestMatch(newFriend);
        
        friends.friendsArray.push(newFriend);
        res.json(match);
    })
    .post("/friends/clear", (req, res) => {
        friends.friendsArray = defaultArray;
        res.json(true);
    })

function bestMatch (newFriend)  {
    // Uses map method to make a new array of the total difference
    // of each friend in the list
    let differences = friends.friendsArray.map((friends) => {
        let total = 0;
        // For Each Loop used to calculeta the diffenrece in value of
        // the two scores in the same array position 
        newFriend.scores.forEach((score, i) => {
            let x = Math.abs(parseInt(score) - parseInt(friends.scores[i]));
            total += x;
        });
        // Total is the sum of the differences in each question
        // It is returned and pushed into the differences array
        return total;
    });
    // Calculates the smallest number in the array
    let minDif = Math.min(...differences);
    // Index of the position of the smallest number in the differences array
    let index = differences.indexOf(minDif);
    // Gets the friend from the array! We have a match!
    let match = friends.friendsArray[index];
    return match;
}
module.exports = router;