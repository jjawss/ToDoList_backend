const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local");
const seedDb = require("./seeds");
const User = require("./models/user");
// const bodyParser = require("body-parser");
seedDb();

indexRoutes = require("./routes/index.js");
taskRoutes = require("./routes/task.js");

app.use(
  require("express-session")({
    secret: "Things that will make other things secret",
    resave: false,
    saveUninitialized: false,
  })
);
//PASSPORT SETUP
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/NodeToDoList`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log("server running on port 3000");
});
