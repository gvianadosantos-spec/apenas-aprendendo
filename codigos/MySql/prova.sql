create database prova;
use prova;

drop table livros2;
drop table clientes2;
drop table vendas2;

create table livros2 (
id int auto_increment primary key,
titulo varchar (100),
autor varchar (100),
ano_publicado varchar (100),
preco varchar (100),
estoque int
);

create table clientes2 (
id int auto_increment primary key,
nome varchar (100),
email varchar (100),
telefone varchar (100)
);

create table vendas2 (
id int auto_increment primary key,
id_livro varchar (100),
id_clientes varchar (100),
data_venda date,
quantidade int,
valor_total varchar (100)
);


insert into livros2 (titulo, autor, ano_publicado, preco, estoque)
values 
 ('MySQL para Iniciantes','Ana Silva','2023', '89.90', 50),
 ('SQL Avançado','Pedro Almeida', '2022', 'R$ 120', 30),
 ('Banco de Dados na Prática','Maria Souza', '2021', ' R$ 95,50', 20),
 ('Modelagem de Dados','João Santos', '2020', ' R$ 110', 15),
 ('NoSQL para Desenvolvedores','“Carla Ferreira', '2023', ' R$ 130.00', 25);
 
 
 select * from livros2;
 
 insert into vendas2 (id_livro, id_clientes, data_venda, quantidade, valor_total)
 values 
 ('1', '1', '2025-01-10', 2, '179.80'),
 ('2', '2', '2025-02-15', 1, '120.00'),
 ('3', '1', '2025-03-20', 3, '286.50'),
 ('4', '3', '2025-04-05', 1, '110.00'),
 ('5', '2', '2025-05-12', 2, '260.00');
 
 select * from vendas2;

select * from livros2
where autor like 'Ana Silva';
 
select * from clientes2
where nome and email;

update l




