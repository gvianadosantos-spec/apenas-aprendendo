CREATE DATABASE escola1;
USE escola1;

CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    curso VARCHAR(50),
    idade INT,
    nota DECIMAL(4,2),
    cidade VARCHAR(50)
);

INSERT INTO alunos (nome, curso, idade, nota, cidade) VALUES
('Ana', 'Administração', 17, 8.5, 'São Paulo'),
('Carlos', 'Informática', 18, 7.0, 'Diadema'),
('Marina', 'Administração', 16, 9.2, 'São Paulo'),
('Lucas', 'RH', 17, 6.8, 'Santo André'),
('Fernanda', 'Informática', 18, 8.9, 'São Bernardo'),
('João', 'RH', 19, 5.5, 'Diadema'),
('Paula', 'Administração', 17, 7.7, 'São Paulo'),
('Ricardo', 'Informática', 16, 9.5, 'Santo André'),
('Juliana', 'RH', 18, 8.0, 'Diadema'),
('Bruno', 'Administração', 19, 6.5, 'São Bernardo');

-- Exercícios


-- Exercício 1
-- Mostre a quantidade total de alunos cadastrados.

select count(nome) as 'total de cadastros' from alunos;

-- Exercício 2
-- Mostre a média das notas dos alunos.

select avg(nota) as 'media' from alunos;

-- Exercício 3
-- Mostre a maior nota da tabela.

select MAX(nota) as 'maior nota'from alunos;

-- Exercício 4
-- Mostre a menor nota da tabela.

select min(nota) as 'menor nota' from alunos;

-- Exercício 5
-- Mostre a soma de todas as notas dos alunos.

select sum(nota) as 'soma das notas' from alunos;

-- Exercício 6
-- Mostre a média de idade dos alunos.

select avg(idade) as 'media dos alunos' from alunos;

-- Exercício 7
-- Mostre quantos alunos existem em cada curso.

select curso,count(*) as 'qunatidade de alunos' from alunos
group by curso;

-- Exercício 8
-- Mostre a média das notas por curso.

select curso, avg(nota) as 'media das notas' from alunos
group by curso;


-- Exercício 9
-- Mostre a maior nota de cada curso.

select curso, max(nota) as 'maior nota'	from alunos
group by curso;

-- Exercício 10
-- Mostre a menor idade por curso.

select curso, min(idade) as 'menor idade' from alunos
group by curso;

-- Exercício 11
-- Mostre a soma das notas agrupadas por cidade.

select cidade, sum(nota) as 'soma das notas' from alunos
group by cidade;

-- Exercício 12
-- Mostre quantos alunos existem em cada cidade.

select cidade, count(*) as 'quantidade de alunos' from alunos
group by cidade;

-- Exercício 13
-- Mostre a média das notas apenas dos alunos de Informática.

select curso, avg(nota) as 'media' from alunos
where curso = 'Informática';

-- Exercício 14
-- Mostre a quantidade de alunos com nota maior que 7.

select count(nota > 7) as 'quantidade de alunos com nota maior que 7' from alunos;

-- Exercício 15
-- Mostre a média das notas por curso, exibindo apenas cursos
-- com média maior que 7.5.

select curso, avg(nota) as 'media' from alunos
group by curso
having avg(nota) > 7.5;

-- Funções de Agregação Utilizadas

-- Função
-- Descrição

-- COUNT()
-- Conta registros

-- AVG()
-- Calcula média

-- MAX()
-- Maior valor

-- MIN()
-- Menor valor

-- SUM()
-- Soma valores

-- GROUP BY
-- Agrupa registros

-- HAVING
-- Filtra agrupamentos