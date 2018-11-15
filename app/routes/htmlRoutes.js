const path = require("path"),
    express = require("express"),
    router = express.Router();


router
    .get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
    .get("/survey", (req,res) => {
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    })
    .get("*", (req,res) => {
        res.redirect("/");
    })


module.exports = router;