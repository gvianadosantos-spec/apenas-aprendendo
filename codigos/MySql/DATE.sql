create database Aula;
use aula;
create table pessoas (
nome Varchar(100),
data_nascimento DATE
);

INSERT INTO pessoas (nome, data_nascimento)
VALUES
	('Guilherme', '2010-02-02'),
	('',''),
	('',''),
    ('',''),
	('',''),
	('','');

select * from pessoas;

