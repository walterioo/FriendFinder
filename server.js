// DEPENDENCIES
const express = require('express'),
 path = require('path'),
 htmlRoute = require('./app/routes/htmlRoutes'),
 apiRoute = require('./app/routes/apiRoutes');


// Express Config
const app = express();

const PORT = process.env.PORT || 8000;
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTING

    app.use("/api",apiRoute);
    app.use("/", htmlRoute);
    
    
    
// Server Listener
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});

