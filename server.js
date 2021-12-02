const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/ingredients", (req, res) => {
  db.getIngredients()
    .then((result) => {
      console.log("results", result.rows);
      res.json(result.rows);
    })
    .catch((err) => {
      console.log("Error at get ingredients: ", err);
    });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
