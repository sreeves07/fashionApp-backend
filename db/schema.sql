DROP DATABASE IF EXISTS fashion_app;
CREATE DATABASE fashion_app;

\c fashion_app;

DROP TABLE IF EXISTS fashion_app;

CREATE TABLE fashions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT,
    img_url TEXT  NOT NULL,
    img2_url TEXT,
    category VARCHAR(50) NOT NULL,
    description TEXT,
    store_name TEXT, 
    product_url TEXT
);