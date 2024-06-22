CREATE TABLE products(
	id serial primary key,
	name varchar(100),
	price varchar(40),
	sp varchar(40),
	cat varchar(100),
	subcat varchar(100),
	img varchar(200),
	star integer,
	details text
);


SELECT * FROM products 
WHERE subcat='fruit'

INSERT INTO products (name,price, sp,cat,subcat,img,star,details)
VALUES ('Egg','60/Doz','50/Doz','dairy&deli','poultry','/images/products/egg.jpeg',4,'best eggs');

INSERT INTO products (name,price, sp,cat,subcat,img,star,details)
VALUES ('Apple','100/Kg','80/Kg','fruit&veg','fruit','/images/products/apple.jpeg',4,'best apple');