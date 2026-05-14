create database CRUDBásico;
use CRUDBásico;

create table Alunos3(
id int auto_increment primary key,
nome varchar (100),
idade int,
curso varchar (100),
data_matricula date
);

insert into Alunos3 (nome, idade, curso)
values
('Carlos', 20, 'Informática'),
('Mariana', 22, 'Administração');

insert into Alunos3 (nome, idade, curso, data_matricula)
values
('rogerio', 22, 'informática', '2023-04-01'),
('Carolina', 18, 'Comunicação Visual', '2025-01-20'),
('antoni', 17, 'Robótica', '2022-08-02'),
('Ana', 16, 'EletroMecânica', '2024-05-30'),
('Caciano', 16, 'Administração', '2025-09-19');

set sql_safe_updates = 0;



update Alunos3
set idade = 21
where nome = 'Carlos';

update Alunos3
set curso ='Sistemas de Informação'
where nome = 'mariana';

update Alunos3
set curso = 'informática'
where curso = 'Sistemas de Informação';

select * from Alunos3;

select nome, curso from Alunos3;

select * from Alunos3
where idade > 21;

select * from Alunos3 
where curso = 'informática';

delete from Alunos3
where nome = 'carlos';

delete from Alunos3
where idade < 18;

delete from Alunos3;
