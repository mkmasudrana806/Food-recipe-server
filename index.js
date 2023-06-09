const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("yes you can now create any api");
});

app.listen(port, () => {
  console.log("api server is running");
});
