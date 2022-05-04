const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("../Backend/confige/auth");
const cors = require("cors")
const user = require("./routes/user");
const file = require("./routes/user")

//server called
InitiateMongoServer();

const app = express();

app.use(cors());
// PORT
const PORT = process.env.PORT || 9000;


// Middleware
app.use(bodyParser.json());

//router use
app.use("/user", user);
app.use("/image",file)


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT`,+PORT);
});