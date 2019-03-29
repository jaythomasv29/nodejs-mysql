DROP IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE  products(
    id INT AUTO_INCREMENT NOT NULL,
    product_name varchar(255),
    department_name varchar(255),
    price decimal,
    stock_quantity INT,
    PRIMARY KEY (id)
);
/* MOCK DATA */
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
    ("ipod","personal","199.99","1000"),
    ("iWatch","personal","399.99","1000"),
    ("AppleTV","home appliance","299.99","1000"),
    ("iPhone XS","personal","699.99","1000"),
    ("iMac","home appliance","2999.99","9"),
    ("Macbook Pro","personal","1999.99","1000"),
    ("Samsung s10","personal","599.99","1000"),
    ("Samsung Watch","personal","259.99","1000"),
    ("Samsung TV","appliance","1250.99","1000"),
    ("Samsung Laptop","appliance","999.99","1000"),
    ("Adidas NMD_R1","clothing","99.99","5"),
    ("Nike VaporMax","clothing","99.99","5"),
    ("Jordan 1's","clothing","999.99","5");
