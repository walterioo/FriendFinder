// DEPENDENCIES
const express = require('express'),
 path = require('path'),
 htmlRoute = require('./app/routes/htmlRoutes'),
 apiRoute = require('./app/routes/apiRoutes');

// Express Config
const app = express(),
    PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static File Serving
app.use(express.static(path.join(__dirname, 'app/public')));

// ROUTING
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Server Listener
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});

