INSERT INTO orders (name, phone_number)
VALUES ('Alice Wonderland', '+16502414473'),
('Lebron James', '+16502414473'),
('Ash Ketchum', '+16502414473');

INSERT INTO pizzas (name, price, ingredients, image_url) 
VALUES ('Pepperoni', 17.38, 'Handmade bread dough, Marinara Sauce, Four different types of artisanal cheese, hand-sliced pepperoni, garlic butter brushed crust', 'http://storage.googleapis.com/bro-cdn1/zgrid/themes/13110/images/items/meat/pepperoni.jpg'),
('Meat Lovers', 17.76, 'Hand-delivered 100% Kobe Waygu Beef sliced, Capicola Sausage from Vienna, Genovese Pepperoni, Marinated Jerk Chicken, our famous four-artisanal cheese blend, marinara sauce and garlic brushed crust', 'http://storage.googleapis.com/bro-cdn1/zgrid/themes/13110/images/items/meat/montebello.jpg'),
('The Terminator', 10.00, 'Ground Beef, Austrian Sausage, American Cheddar Cheese, and BBQ Sauce, this slice is out of this world', 'http://storage.googleapis.com/bro-cdn1/zgrid/themes/13110/images/items/meat/calabria.jpg'),
('Hawaiian', 15.00, 'Anyone who says this is not a real type of pizza is missing out on juicy Australian pineapple and grass fed Prosciutto Cotto topped with lashings of Mozza and Fior di Latte', 'http://storage.googleapis.com/bro-cdn1/zgrid/themes/13110/images/items/meat/hawaiian.jpg'),
('Vegetarian', 16.00, 'Tempeh is so 2019. With tomato, onion, fetta, 3 types of roasted pepper topped with Grana Padano and mozza, this pie is is greener than the programmers who made this website', 'http://storage.googleapis.com/bro-cdn1/zgrid/themes/13110/images/items/veg/pizza-magic.jpg');

INSERT INTO pizzas_orders(pizza_id, order_id, quantity)
VALUES (1, 2, 3),
(2, 2, 1),
(3, 1, 1);