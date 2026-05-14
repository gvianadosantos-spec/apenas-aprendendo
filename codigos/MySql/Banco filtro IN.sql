-- 1. Criação do ambiente
CREATE DATABASE IF NOT EXISTS exercicios_sql;
USE exercicios_sql;

-- 2. Criação das tabelas
CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT,
    cidade VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    produto VARCHAR(100),
    valor DECIMAL(10, 2)
);

-- 3. Inserção ÚNICA de Clientes (Massa de teste completa)
INSERT INTO clientes (id_cliente, nome, idade, cidade) VALUES
(1, 'Ana', 22, 'São Paulo'),
(2, 'Carlos', 25, 'Curitiba'),
(3, 'Marcos', 30, 'Rio de Janeiro'),
(4, 'Juliana', 28, 'Belo Horizonte'),
(5, 'Fernanda', 35, 'São Paulo'),
(6, 'Roberto', 40, 'Curitiba'),
(7, 'Ana', 28, 'Curitiba'),
(8, 'Lucas', 22, 'Rio de Janeiro'),
(9, 'Beatriz', 25, 'São Paulo'),
(10, 'Ricardo', 30, 'Belo Horizonte'),
(11, 'Carla', 22, 'São Paulo'),
(12, 'Joaquim', 35, 'Rio de Janeiro'),
(13, 'Patrícia', 25, 'Curitiba'),
(14, 'Mateus', 28, 'Belo Horizonte'),
(15, 'Daniela', 40, 'São Paulo');

-- 4. Inserção ÚNICA de Pedidos (Massa de teste completa)
INSERT INTO pedidos (id_cliente, produto, valor) VALUES
(1, 'Notebook', 3500.00),
(2, 'Mouse', 80.00),
(3, 'Teclado', 120.00),
(4, 'Mesa', 500.00),
(5, 'Monitor', 900.00),
(6, 'Cadeira', 700.00),
(1, 'Mouse', 80.00),
(7, 'Notebook', 3500.00),
(8, 'Monitor', 4000.00),
(9, 'Teclado', 120.00),
(10, 'Mouse', 80.00),
(11, 'Notebook', 900.00), -- Notebook em promoção
(12, 'Mesa', 500.00),
(13, 'Cadeira', 700.00),
(14, 'Monitor', 900.00),
(15, 'Notebook', 3500.00),
(2, 'Mesa', 500.00),
(3, 'Mouse', 120.00),
(4, 'Monitor', 3500.00),
(5, 'Cadeira', 500.00);


-- =============================================================================
-- 🟢 NÍVEL 1 – BÁSICO (1–10)
-- =============================================================================

-- 1. Liste todos os clientes que moram em São Paulo ou Curitiba.

select * from clientes
where cidade in ('São Paulo', 'Curitiba');


-- 2. Liste os clientes que têm idade 22 ou 25.
select * from clientes
where idade in (22, 25);


-- 3. Liste todos os pedidos dos produtos Notebook ou Mouse.
select * from pedidos
where produto in ('Notebook', 'Mouse');

-- 4. Liste os pedidos com valores 80 ou 120.
select * from pedidos
where valor in (80, 120);

-- 5. Liste apenas os nomes dos clientes Ana e Carlos.
select * from clientes
where nome in ('Ana', 'Carlos');


-- 6. Liste clientes que moram em Rio de Janeiro ou Belo Horizonte.
select * from clientes
where cidade in ('Rio de Janeiro', 'Belo Horizonte');

-- 7. Liste todos os pedidos feitos pelos clientes 1 e 2.
select * from clientes
where id_cliente in (1, 2);

-- 8. Liste os produtos que são Mesa ou Cadeira.
select * from pedidos
where produto in ('Mesa', 'Cadeira');

-- 9. Liste clientes com idade 28, 30 ou 35.
select * from clientes
where idade in (28, 30, 35);

-- 10. Liste pedidos com valor 500 ou 700.
select * from pedidos
where valor in (500, 700);



-- =============================================================================
-- 🟡 NÍVEL 2 – INTERMEDIÁRIO (11–20)
-- =============================================================================

-- 11. Liste clientes que NÃO moram em São Paulo ou Curitiba.
select * from clientes
where cidade not in ('São Paulo', 'Curitiba');


-- 12. Liste pedidos que NÃO são dos produtos Mouse ou Teclado.
select * from pedidos
where produto not in ('Mouse', 'Teclado');

-- 13. Liste clientes que NÃO se chamam Ana ou Marcos.
select * from clientes
where nome not in ('Ana', 'Marcos');

-- 14. Liste pedidos feitos pelos clientes 3, 4 e 5.
select * from pedidos
where id_cliente in (3, 4, 5);

-- 15. Liste clientes que NÃO têm idade 22 ou 25.
select * from clientes
where idade not in (22, 25);

-- 16. Liste os produtos e valores dos pedidos com valor 900 ou 3500.
select produto, valor from pedidos
where valor in (900, 3500);

-- 17. Liste nome e cidade dos clientes que moram em São Paulo ou Belo Horizonte.
select nome, cidade from clientes
where cidade in ('São Paulo', 'Belo Horizonte');

-- 18. Liste pedidos que NÃO foram feitos pelos clientes 1 e 2.
select * from pedidos
where id_cliente not in (1, 2);


-- 19. Liste clientes que têm idade 25, 28 ou 30 e moram em São Paulo ou Rio de Janeiro.
select * from clientes
where idade in (25, 28,30) and cidade in ('São Paulo', 'Rio de Janeiro');

-- 20. Liste pedidos com valor 80, 120 ou 500 e produtos Mouse, Teclado ou Mesa.
select * from pedidos
where valor in (80, 120, 500) and produto in ('Mouse', 'Teclado', 'Mesa');

-- =============================================================================
-- 🔴 NÍVEL 3 – AVANÇADO (21–30)
-- =============================================================================

-- 21. Liste clientes que moram em São Paulo ou Curitiba, mas não têm idade 22.
select * from clientes
where cidade in ('São Paulo', 'Curitiba') and idade not in (22);

-- 22. Liste pedidos feitos pelos clientes 1, 3 e 5, mas com valor diferente de 80.


-- 23. Liste nomes dos clientes que são Ana, Juliana ou Fernanda e têm idade 25, 28 ou 35.
select * from clientes
where nome in ('Ana', 'Juliana', 'Fernanda') and idade in (25, 28, 35);

-- 24. Liste pedidos dos produtos Notebook ou Monitor com valores 900, 3500 ou 4000.
select * from pedidos
where produto ('Notebook', 'Monitor') and valor in (900, 3500, 4000);

-- 25. Liste clientes que não moram no Rio de Janeiro e têm idade 30, 35 ou 40.
select * from clientes
where cidade not in ('Rio de Janeiro') and idade in (30, 35, 40);

-- 26. Liste pedidos que não são do produto Mesa e têm valor 500, 700 ou 900.
select * from pedidos
where produto not in ('Mesa') and valor in (500, 700, 900);


-- 27. Liste clientes chamados Roberto ou Carlos que moram em Curitiba ou Rio de Janeiro.
select * from clientes
where nome in ('Roberto', 'Carlos') and cidade in ('Curitiba', 'Rio de Janeiro');


-- 28. Liste pedidos feitos pelos clientes 2, 4 ou 6 e com produtos Mouse, Notebook ou Mesa.
select * from pedidos
where id_cliente in (2, 4, 6) or produto in ('Mouse', 'Notebook', 'Mesa');


-- 29. Liste clientes com idade 22, 25 ou 28, mas que não moram em Belo Horizonte.
select * from clientes
where idade in (22, 25, 28) and cidade not in ('Belo Horizonte');


-- 30. Liste pedidos com valor diferente de 120 feitos pelos clientes 1, 2, 3 ou 4.
select * from pedidos
where valor not in (120) and id_cliente in (1, 2, 3, 4);


-- =============================================================================
-- 💀 DESAFIO EXTRA (NÍVEL PROVA DIFÍCIL)
-- =============================================================================

-- 31. Liste clientes que moram em São Paulo, Curitiba ou Rio de Janeiro e têm idade 25, 28 ou 30, mas não se chamam Ana.
select * from clientes
where cidade in ('São Paulo', 'Curitiba', 'Rio de Janeiro') and idade in (25, 28, 30) and nome not in ('Ana');


-- 32. Liste pedidos com produtos Notebook, Monitor ou Mesa, com valor 500, 900 ou 3500, mas que não sejam do cliente 1.
select * from pedidos
where produto in ('Notebook', 'Monitor', 'Mesa') and valor in (500, 900, 3500) and id_cliente not in (1);
