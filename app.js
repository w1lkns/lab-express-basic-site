// init express
const express = require("express");

// set app
const app = express();

// set port
const port = 3000;

// set public
app.use(express.static("public"));

// 1st page /home
app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(__dirname + "/views/home-page.html");
});

// 2nd page /about
app.get("/about", (req, res) => {
  console.log(req);
  res.sendFile(__dirname + "/views/about.html");
});

// 3rd page /works
app.get("/works", (req, res) => {
  console.log(req);
  res.sendFile(__dirname + "/views/works.html");
});

// 4th page /gallery
app.get("/gallery", (req, res) => {
    console.log(req);
    res.sendFile(__dirname + "/views/gallery.html");
  });

// Start the server and sets the listening port
app.listen(port, () => console.log(`app listening on port ${port}! `));
