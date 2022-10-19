CREATE TABLE productos(
id INT,
nombreProducto VARCHAR(100000),
imagen VARCHAR(1000000),
lanzamiento VARCHAR(100000),
plataformas VARCHAR (1000),
ordenConologico INT,
precio INT,
PRIMARY KEY(id)
);

INSERT INTO productos (id,nombreProducto,imagen,lanzamiento,plataformas,ordenConologico,precio);
VALUES(1, "Halo Wars","https://media.vandal.net/m/39872/halo-wars-definitive-edition-20161228115810_1.jpg","26 de Febrero del 2009","Xbox One, Microsoft Windows, Xbox 360",2531,4 ); 