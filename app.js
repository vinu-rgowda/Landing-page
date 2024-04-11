const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");  
const ContactData = require("./API/Route/ContactData");
 
app.use(cors({origin:'*'}));

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://0.0.0.0:27017/admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connection Success!!");
    }
  }
);
 

app.use(express.json({ extended: false, limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 })
); 
 
app.use("/client/src/app/home/home.component.ts", FormData);
 
app.use((req, res, next) => {
  res.status(404).json({
    message: "Invalid response",
    status_code: "404",
  });
});

module.exports = app;
