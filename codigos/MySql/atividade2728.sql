create database a;
use a;

drop table b;

create table b(
id int primary key auto_increment,
nome varchar (100),
gmail varchar (100),
telefone varchar (100),
cidade varchar (100),
profissao varchar(100)
);

insert into b (nome, gmail, telefone, cidade, profissao)
values 
('gustavo', 'gustavinhodograu@outlook.com','11 91694-7889', 'são paulo','ti avançado'),
('guilherme', 'guilhermedasrimas@gmail.com','11 93087-5122', 'são paulo','dono da boca'),
('pedro', 'pedrinhodomar@gmail.com','1 98922-4002', 'nova yourk','encanador'),
('gabriel silva', 'joaodasilva@gmail.com','11 90232-7889', 'são paulo','eletresista'),
('samuel', 'samuelperodro@gmail.com','13 98728-8383', 'diadema','engenheiro'),
('tasha', 'naoenatasha@hotmail', '917471168', 'bahia', 'gerente de posto'),
('ana', 'bananana@ghotmall', '956639090', 'sao paulo', 'feirante'),
('willian afton', 'coelhãoamarelo@hotmail.com','11 989097866', 'bahia', 'pizzaiolo'),
('henrique juliano', 'jazzghost@hotmail.com', '11 998734346', 'são jorge', 'caçador de fantasmas'),
('sansaonic','sansaoesqueleleto@hotmail.com','11 913347565','são bernado', 'entregador ifood'),
('huggy wuggy', 'obichodoruim@hotmail.com', '11 863254234', 'acre', 'mascote de festa'),
('neymar jr','caicaineizao@hotmail','11 938325822','pacaibum','dublê');

SET SQL_SAFE_UPDATES = 0;



select * from b;

#Exercícios

#Buscar todos os clientes cujo nome começa com a letra "A".
select * from b
where nome like 'A%';

#Buscar clientes cujo nome termina com a letra "o".
select * from b
where nome like '%o';

#Buscar clientes que tenham "Silva" em qualquer parte do nome.
select * from b
where nome like '%silva%'; 

#Buscar clientes cujo email seja do Gmail.
select * from b
where gmail like '%@gmail%';

#Buscar clientes cujo email termine com "@hotmail.com".
select * from b
where gmail like '%@hotmail.com';

#Buscar clientes que moram em cidades que começam com "S".
select * from b 
where cidade like 's%';

#Buscar clientes cuja cidade contenha a palavra "Rio".
select * from b
where cidade like '%rio%';

#Buscar clientes cuja profissão contenha "Eng".
select * from b
where profissao like '%eng%';

#Buscar clientes cujo nome tenha exatamente 5 letras.
select * from b
where nome like '_____';

#Buscar clientes cujo nome tenha "a" como segunda letra.
select * from b
where nome like '_a%';

#Atualizar a profissão para "Desenvolvedor" para todos que possuem profissão parecida com "Programador".
update b
set profissao = 'desenvolvedor'
where profissao = 'ti avançado';

#Atualizar o email para "@outlook.com" para todos que possuem "@hotmail.com".
update b
set gmail = '%@outlook.com'
where gmail = '%@hotmail.com';

#Atualizar a cidade para "São Paulo - SP" para clientes cuja cidade comece com "São".
update b
set cidade = "São Paulo - SP"
where cidade = 'são%';
#Atualizar o telefone para começar com "11" para clientes cujo telefone comece com "9".
#Excluir clientes cujo email seja do Yahoo.
#Excluir clientes cujo nome contenha "Carlos".
#Excluir clientes cuja profissão termine com "Junior".
#Buscar clientes cujo telefone termine com "00".
#Buscar clientes cujo nome possua exatamente 4 caracteres antes de um espaço.
#Buscar clientes cujo email tenha a letra "a" antes do símbolo "@".

select * from b;