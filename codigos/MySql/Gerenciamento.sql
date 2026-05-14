create database Gerenciamento;
use Gerenciamento;

create table fornecedores (
id int auto_increment primary key,
nome varchar(100),
telefone varchar(100),
categoria varchar(100)
);

 insert into fornecedores (nome, telefone, categoria)
 values
 ('guilherme','11-903875112','comida'),
  ('gustavo','11-738272638','bebida'),
   ('pedro','11-7283784829','brinquedos'),
    ('ana','11-7272883739','cadeiras');
    
update fornecedores
    set telefone = '13-783746388'
    Where  id = (3);
 
 delete from fornecedores
 where id =1;
  delete from fornecedores
 where id =2;
 
 select * from fornecedores;
 