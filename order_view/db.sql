DROP DATABASE IF EXISTS git_burger;
CREATE DATABASE git_burger;
use git_burger;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS burger_ingrediants;
CREATE TABLE burger_ingrediants (
    id INT AUTO_INCREMENT NOT NULL,
    burger_id INT NOT NULL,
    ingrediant_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (burger_id) REFERENCES burgers(id)
);

DROP TABLE IF EXISTS burger_orders;
CREATE TABLE burger_orders (
    id INT AUTO_INCREMENT NOT NULL,
    order_date DATE NOT NULL,
    PRIMARY KEY (id)
    );

DROP TABLE IF EXISTS burger_order_items;
CREATE TABLE burger_order_items (
    id INT AUTO_INCREMENT NOT NULL,
    burger_order_id INT NOT NULL,
    burger_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (burger_order_id) REFERENCES burger_orders(id),
    FOREIGN KEY (burger_id) REFERENCES burgers(id)
);

DROP TABLE IF EXISTS burger_order_ingrediants_customizations;
CREATE TABLE burger_order_ingrediants_customizations (
    id INT AUTO_INCREMENT NOT NULL,
    burger_order_items_id INT NOT NULL,
    ingrediant_id INT NOT NULL,
    customization VARCHAR(1) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (burger_order_items_id) REFERENCES burger_order_items(id)
);

/* INSERTIONS */
INSERT INTO burgers (burger_name, price) VALUES ('Cheeseburger', 5);
INSERT INTO burgers (burger_name, price) VALUES ('Hamburger', 4);
INSERT INTO burgers (burger_name, price) VALUES ('Fish burger', 6);
INSERT INTO burgers (burger_name, price) VALUES ('Chicken burger', 6);
INSERT INTO burgers (burger_name, price) VALUES ('Veggie burger', 5);

INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Cheese');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Beef');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Lettuce');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Tomato');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Onion');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Pickles');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Ketchup');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Mustard');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (1, 'Mayo');

INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Beef');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Lettuce');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Tomato');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Onion');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Pickles');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Ketchup');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Mustard');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (2, 'Mayo');

INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Fish');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Lettuce');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Tomato');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Onion');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Pickles');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Ketchup');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Mustard');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (3, 'Mayo');

INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'chicken');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'Lettuce');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'Tomato');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'Onion');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'Pickles');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'Ketchup');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'Mustard');
INSERT INTO burger_ingrediants (burger_id, ingrediant_name) VALUES (4, 'Mayo');