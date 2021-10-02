const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test-route", (req, res) => {
  res.send("Test 1,2");
});

app.listen(port, () => {
  console.log(`Listening on port 5000...`);
});
