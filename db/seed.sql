CREATE TABLE products (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(50),
price FLOAT,
img_url TEXT
);

INSERT INTO products (product_name,price,img_url)
VALUES ('Shoes',199.99,'img'),
('Shoes',199.99,'img'),
('Shoes',199.99,'img'),
('Shoes',199.99,'img'),
('Shoes',199.99,'img'),
('Shoes',199.99,'img');

SELECT * FROM products;
