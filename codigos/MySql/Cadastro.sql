create database Cadastro;

use Cadastro;

 create table Clientes (
id int auto_increment primary key,
nome varchar(100),
email varchar(100),
cidade varchar(100)
);
 select * from Clientes;
 
 insert into Clientes (nome, email, cidade)
 values
 ('Jurandir', 'jurandir@gmail.com', 'Pernanbuco'),
 ('Gustavo', 'gsutavosap@gmail.com', 'Parana'),
 ('Guilherme', 'guilherme@gmail.com', 'Sao Paulo'),
 ('Antonio', 'antonio@gmail.com', 'Acre'),
 ('Diogo', 'diogo@gmail.com', 'Santos');
 
	update Clientes
    set cidade = 'Sao Paulo'
    Where  id = (2);
     
    
