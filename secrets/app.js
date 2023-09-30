import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";
import md5 from 'md5';
import bcrypt from 'bcrypt';



const app = express();

 
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
 
mongoose.connect("mongodb://127.0.0.1:27017/userDB",{useNewUrlParser: true});
 
const userSchema = {
    email: String,
    password: String
};
 
const User = new mongoose.model("User", userSchema);
 
 
app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.post("/register", async function(req, res){
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password with a salt round of 10

    const newUser = new User({
      email: req.body.username,
      password: hashedPassword // Store the hashed password in the database
    });

    await newUser.save();
    res.render("secrets");
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async function(req, res){
  const username = req.body.username;
  const password = req.body.password; // Don't hash the user's input password here

  try {
    const foundUser = await User.findOne({email: username});

    if (foundUser) {
      const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

      if (isPasswordMatch) {
        res.render("secrets");
      } else {
        console.log("Incorrect password");
        // Handle the case where the password doesn't match
      }
    } else {
      console.log("User not found");
      // Handle the case where the user doesn't exist
    }
  } catch (err) {
    console.log(err);
  }
});

 
 
 
app.listen(3000, function () {
  console.log("Server started at port 3000");
});
