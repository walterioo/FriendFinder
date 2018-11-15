const path = require("path"),
    express = require("express"),
    router = express.Router();


router
    .get("/friends", (req, res) => {
        console.log("api friends");
        
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    .post("/friends", (req,res) => {
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    })

module.exports = router;