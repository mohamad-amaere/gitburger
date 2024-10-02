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
