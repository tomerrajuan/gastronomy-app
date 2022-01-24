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

app.post("/delete/ingredient", function (req, res) {
  db.deleteIngredient(req.body.itemId, 1)
    .then((result) => {
      res.json({ success: true });
    })
    .catch((e) => {
      console.log("error in deleting item", e);
      res.json({ success: false });
    });
});

app.get("/ingredients/search/:query", (req, res) => {
  db.getIngredientsByQuery(req.params.query)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.log("Error at searching items: ", err);
    });
});

app.post("/addItem", (req, res) => {
  const newItem = Object.keys(req.body).map((key) => req.body[key]);

  db.addItemToIngredients(newItem)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.log("Error at searching items: ", err);
    });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
