
CREATE DATABASE IF NOT EXISTS loja_exercicios;
USE loja_exercicios;


CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    marca VARCHAR(50),
    preco DECIMAL(10, 2),
    estoque INT
);


INSERT INTO produtos (nome, categoria, marca, preco, estoque) VALUES
('Mouse Gamer', 'Informática', 'Logitech', 120.00, 15),
('Monitor 24"', 'Informática', 'Samsung', 850.00, 8),
('Teclado Mecânico', 'Informática', 'Dell', 250.00, 4),
('Smartphone S23', 'Eletrônicos', 'Samsung', 4500.00, 12),
('Fone Bluetooth', 'Eletrônicos', 'JBL', 199.00, 0),
('Notebook Inspiron', 'Informática', 'Dell', 3500.00, 5),
('Geladeira', 'Eletrodomésticos', 'LG', 2800.00, 2),
('Cabo HDMI', 'Eletrônicos', 'Genérico', 25.00, 50),
('Smart TV 55', 'Eletrônicos', 'LG', 3200.00, 7),
('PlayStation 5', 'Games', 'Sony', 4200.00, 10),
('Jogo Spider-Man', 'Games', 'Sony', 250.00, 3),
('Memória RAM 16GB', 'Informática', 'Kingston', 450.00, 20),
('MacBook Pro', 'Informática', 'Apple', 12000.00, 4),
('Microondas', 'Eletrodomésticos', 'Samsung', 600.00, 6),
('iPad Pro', 'Eletrônicos', 'Apple', 7000.00, 2);


-- questoes
-- Exercícios de SELECT no MySQL


-- 1.Liste todos os produtos.

select * from produtos;

-- 2.Mostre apenas o nome e o preço dos produtos.

select nome, preco from produtos;

-- 3.Liste os produtos com preço maior que 100.

select * from produtos
where preco > 100;

-- 4.Mostre os produtos com estoque menor que 10.

select * from produtos
where estoque < 10;

-- 5.Liste os produtos da categoria "Eletrônicos".

select * from produtos
where categoria in ('Eletrônicos');

-- 6.Mostre os produtos da marca Samsung.

select * from produtos
where marca in ('Samsung');

-- 7.Liste os produtos com preço entre 50 e 500.

select * from produtos
where preco between 50 and 500;

-- 8.Mostre os produtos cujo estoque seja igual a 0 ou menor que 5.

select * from produtos
where estoque = 0 or estoque < 5; 

-- 9.Liste os produtos da categoria "Informática" e da marca Dell.

select * from produtos 
where categoria in ("Informática") and marca in ('Dell');
-- 10.Mostre os produtos que pertencem às categorias: Eletrônicos Informática Games

select * from produtos
where categoria in ('Eletrônicos', 'Informática', 'Games');

-- 11.Liste os produtos cujo nome começa com a letra "M".

select * from produtos
where nome like 'm%';

-- 12.Mostre os produtos cujo nome termina com "Pro".

select * from produtos 
where nome like '%pro';

-- 13.Liste os produtos que possuem a palavra "Note" no nome.

select * from produtos
where nome like '%note%';

-- 14.Mostre os produtos com preço maior que 1000 e estoque maior que 3.

select * from produtos
where preco > 1000 and estoque > 3;

-- 15.Liste os produtos da marca LG ou Samsung.