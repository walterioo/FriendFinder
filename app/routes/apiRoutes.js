const path = require("path"),
    express = require("express"),
    router = express.Router();


router
    .get("/friends", (req, res) => {
        res.send("Api Friends")    
    })
    .post("/friends", (req,res) => {
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    })

module.exports = router;