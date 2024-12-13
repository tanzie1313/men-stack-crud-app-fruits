// server.js

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });
  // Import the Fruit model
const Fruit = require("./models/fruit.js");
app.use(express.urlencoded({ extended: false }));//gives us access o stuff in form in object


app.listen(3003, () => {
  console.log('Listening on port 3003');
});

// server.js

// GET /
// app.get("/", async (req, res) => {
    // res.send("hello, friend!");
//   });
  // server.js

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  
// server.js

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
});
  // server.js

// POST /fruits
// server.js

// POST /fruits
app.post("/fruits", async (req, res) => {
    if (req.body.isReadyToEat === "on") {
      req.body.isReadyToEat = true;
    } else {
      req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits/new");
  });
  //pdate fruit model for price and  fruit form 