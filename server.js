const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();
const dotenv = require("dotenv");

//Cross Origin Access Required
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

dotenv.config({ path: ".env" });
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static assets
app.use(express.static(path.join(__dirname, "client/build")));
// Routes
app.use(routes);

// Start the API server
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}...`);
});

var server = require("http").Server(app);
