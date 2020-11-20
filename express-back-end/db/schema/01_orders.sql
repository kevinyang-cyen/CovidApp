DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS pizzas CASCADE;
DROP TABLE IF EXISTS pizzas_orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(12) NOT NULL,
  received_at TIMESTAMP DEFAULT now(),
  completed_at TIMESTAMP,
  order_status VARCHAR(50) DEFAULT 'Pending',
  time INT DEFAULT 0
);

CREATE TABLE pizzas (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
price decimal(6,2),
ingredients TEXT,
image_url TEXT DEFAULT 'http://placekitten.com/125/125'
);

CREATE TABLE pizzas_orders(
  id SERIAL PRIMARY KEY NOT NULL,
  pizza_id INTEGER REFERENCES pizzas(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity INT NOT NULL
);
