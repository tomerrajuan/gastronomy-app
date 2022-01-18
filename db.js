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
