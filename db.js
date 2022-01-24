const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kth18821",
  host: "localhost",
  port: 5432,
  database: "gma",
});

module.exports.getUser = () => {
  return pool.query(`SELECT * FROM users`);
};

module.exports.getIngredients = () => {
  return pool.query(`SELECT * FROM ingredients`);
};

module.exports.deleteIngredient = (itemId, userId) => {
  const q = `
  DELETE FROM ingredients WHERE (id = $1 AND user_id = $2)`;
  const params = [itemId, userId];
  return pool.query(q, params);
};

module.exports.getIngredientsByQuery = (query) => {
  return pool.query(`SELECT * FROM ingredients WHERE item ILIKE $1`, [
    query + "%",
  ]);
};

exports.addItemToIngredients = function (newItem) {
  return pool.query(
    `INSERT INTO ingredients (user_id, item, unit, price, supplier, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    newItem,
  );
};
