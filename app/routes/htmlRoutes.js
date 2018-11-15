const path = require("path"),
    express = require("express"),
    router = express.Router();


router
    .get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
    .get("/survey", (req,res) => {
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    })


module.exports = router;