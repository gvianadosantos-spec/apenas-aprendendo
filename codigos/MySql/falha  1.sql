create database guilherme;
use guilherme;

create table livre (

id int auto_increment primary key,
 categoria varchar (100),
 tempo varchar (100),
 região varchar (100),
 competidor varchar (100),
 versão varchar (100)
);
select * from livre;

insert into livre (tempo, região, competidor, versão)
values
('30m 49s', 'swden', 'z Vypur', 'hollow Knight'),
('30m 43s', 'USA', 'Lep', 'Hollow Knight'),
('31m 01s', 'Brasil', 'Spirity', 'Hollow Knight'),
('31m 19s', 'USA', 'LOL Nebula', 'Hollow Knight'),
('31m 24s', 'Ukrani', 'SkateKing', 'Hollow Knight');
