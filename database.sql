DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

  CREATE TABLE ingredients(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) NOT NULL,
      item VARCHAR(255) NOT NULL,
      unit VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      supplier VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );    

INSERT INTO users (email, password)
  VALUES  ('hey@example.com' , '12345');

      INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Tomato', 'Kg', 2, 'Metro', 'Vegtables');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Eggplant', 'Kg', 2, 'Metro', 'Vegtables');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Onion', 'Kg', 2, 'Metro', 'Vegtables');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Leak', 'Kg', 2, 'Metro', 'Vegtables');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Apple', 'Kg', 2, 'Metro', 'Fruits');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Pear', 'Kg', 2, 'Metro', 'Fruits');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Cherry', 'Kg', 2, 'Metro', 'Fruits');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Oyster', 'Kg', 2, 'Fish Klub', 'Fish');
        INSERT INTO ingredients (user_id, item, unit, price, supplier, category)
  VALUES  (1, 'Sardin', 'Kg', 2, 'Fish Klub', 'Fish');
  