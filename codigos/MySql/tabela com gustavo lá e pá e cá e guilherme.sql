create database escola3;
use escola3;
drop table funcionarios;
CREATE TABLE funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    departamento VARCHAR(50) NOT NULL,
    data_contratacao DATE NOT NULL,
    idade INT NOT NULL);
    
    CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    estoque INT NOT NULL
);

insert into funcionarios (nome, salario, departamento, data_contratacao, idade)
values
('joao', 2500.00, 'cozinha', '1989-02-02', 56),
('ana', 1600, 'estoque', '2022-04-19', 21),
('carlos', 8000, 'gerente', '2015-06-30', 32),
('roberta', 4000, 'limpeza', '2017-01-01', 31),
('guilherme', 5000, 'desenvovimento junior', '2023-02-02', 26),
('arnorde viana santos junior II', 50000.99, 'COO', '2025-04-11', 19),
('arnorde viana santos junior I', 20000000, 'CEO', '1989-02-01', 55);


insert into produtos (nome, preco, categoria, estoque)
values
('oleo', 19.99, 'ingrediente', 90),
('batata', 7.99, 'legume', 100),
('cenoura', 3.25, 'legume', 80),
('carne', 90.00, 'carne animal', 60),
('tomate', 6.25, 'fruta', 100);

select * from produtos;

select * from funcionarios;

#Selecione todos os registros do departamento de TI.
select * from funcionarios
where departamento = 'cozinha';

#Selecione todos os registros com salário maior que 4000.
select * from funcionarios
where salario > 4000;

#Selecione todos os registros com salário entre 3000 e 4000.
select * from funcionarios
where salario > 1500 and salario < 4000;

#Selecione todos os registros do departamento de Vendas com salário maior que 3300.
select * from funcionarios
where estoque and salario > 1500;

#Selecione todos os registros com idade entre 25 e 35 anos.
select * from funcionarios
where idade > 25 and idade < 35;

#Selecione todos os registros que NÃO pertencem ao departamento de RH.
select * from funcionarios
where departamento != 'limpeza';

#Selecione todos os registros com salário menor que 3500 OU idade maior que 30.
select * from funcionarios
where salario < 3500 or idade > 30;

#Selecione todos os registros com data de contratação entre 2019 e 2021.
select * from funcionarios
where data_contratacao > '2000-01-01' and data_contratacao < '2025-01-01';

#Selecione todos os registros do departamento de TI OU Vendas.
select * from funcionarios
where departamento = 'estoque' or departamento ='limpeza';

#Selecione todos os registros com salário maior que 3800 E idade menor que 35.
select * from funcionarios
where salario > 3800 and idade < 35;



#🔹 Produtos

#Selecione todos os registros com preço entre 300 e 1000.
select * from produtos
where preco > 30 and preco < 91;

#Selecione todos os registros da categoria Eletrônicos com estoque entre 10 e 25.

select * from produtos
where estoque > 3 and estoque < 91 and categoria = 'legumes';

#Selecione todos os registros com preço entre 200 e 500 OU estoque maior que 15.
select * from produtos
where preco > 2 and preco < 10 or estoque > 15;

#Selecione todos os registros que NÃO são da categoria Móveis.
select * from produtos
where categoria != 'ingrediente';

#Selecione todos os registros com preço menor que 500 E estoque maior que 5.
select * from produtos
where preco < 20 and estoque >80;

#Selecione todos os registros com preço entre 800 e 2500 E categoria Eletrônicos.
select * from produtos
where preco > 3 and preco <70 and categoria = 'legume';

#Selecione todos os registros com estoque entre 5 e 15 OU preço menor que 400.
select * from produtos
where estoque > 60 and estoque <90 or preco < 10;

#Selecione todos os registros com preço entre 100 e 1000 E que NÃO sejam da categoria Móveis.

select * from produtos
where preco < 10 and preco < 90 and categoria != 'ingrediente';

#Selecione todos os registros com estoque entre 10 e 30 E preço maior que 300.
select * from produtos
where estoque > 70 and estoque < 90 and preco > 3;

#Selecione todos os registros com preço entre 200 e 800 OU estoque menor que 10
select * from produtos
where preco > 15 and preco < 81 or estoque < 70;

#🔹 Funcionários – Novos Enunciados

#1️⃣ Selecione todos os funcionários com salário acima da média salarial da empresa.


#2️⃣ Selecione todos os funcionários do departamento de TI contratados após 2020.
select * from funcionarios
where departamento = 'cozinha' and data_contratacao > '1500-01-01';
#3️⃣ Selecione todos os funcionários com idade maior que 40 e salário menor que 5000.
select * from funcionarios
where idade > 40 and salario < 5000;

#4️⃣ Selecione todos os funcionários cujo nome começa com a letra “A”.

#5️⃣ Selecione todos os funcionários contratados antes de 2018 ou que pertençam ao departamento de RH.
select * from funcionarios
where data_contratacao < '2018-01-01' or departamento = 'cozinha';

#6️⃣ Selecione todos os funcionários com salário entre 2500 e 4500, exceto os do departamento de Vendas.
select * from funcionarios
where salario > 2500 and salario < 4500 and departamento != 'vendas';
#7️⃣ Selecione todos os funcionários que possuem mais de 30 anos e não pertencem ao departamento de TI.
select * from funcionarios
where idade > 30 and departamento != 'ti';

#8️⃣ Selecione todos os funcionários do departamento de Vendas com idade entre 25 e 40 anos.
select * from funcionarios
where departamento = 'vendas' and idade > 25 and idade < 40;

#9️⃣ Selecione todos os funcionários com salário maior que 6000 ou idade menor que 23.
select * from funcionarios
where salario > 6000 or idade < 23;

#🔟 Selecione todos os funcionários contratados no ano de 2022.
select * from funcionarios 
where data_contratacao >= '2020-01-01' and data_contratacao <= '2026-12-31';