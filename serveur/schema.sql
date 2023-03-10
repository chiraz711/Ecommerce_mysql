DROP DATABASE IF EXISTS ecommerce;
CREATE DATABASE IF NOT EXISTS ecommerce;
use ecommerce;
CREATE TABLE product(
    id int auto_increment ,
    name varchar(255),
    category varchar(255),
    price varchar(255),
    description varchar(255),
    quantity varchar(255),
    image varchar(255),
    created_at timestamp not null default CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP() ,
    primary key (id)
);