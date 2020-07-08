```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
```

### Exercício 1
### a.
* VARCHAR(255) - indica que é uma string de no máximo 255 caracteres.
* PRIMARY KEY - Toda tabela possuirá somente uma chave primária, um identificador único.
* NOT NULL - não pode ser nulo.
* DATE - representa a data de aniversário do ator.

### b.
* SHOW DATABASES - mostrou o information_schema e o name.
* SHOW TABLES - mostrou a tabela escrito actor
* DESCRIBE Actor - mostrou uma tabela com id, name, salary, birth_date e gender
* SHOW Actor - aparece um erro 1064.

### Exercício 2
### b. 
```
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
);
```
* Código de erro: 1064. Você tem um erro na sintaxe do SQL; verifique o manual que corresponde à versão do servidor MySQL para a sintaxe correta a ser usada perto de 'VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female")' na linha 1.
(este não deu o erro certo..)

### c.
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1.Está faltando os  parâmetros birth_date e gender.

### d.
Código de erro: 1364. O campo 'name' não tem um valor padrão. Não foi preenchido o nome do ator.

### e.
Código do erro: 1292. Valor incorreto da data: '1950' para a coluna 'data_de_natalidade' na linha 1. Faltou colocar as aspas na data de nascimento.

### Exercício 3

### a.
SELECT * from Actor WHERE gender = "female"
### b.
SELECT salary, name from Actor WHERE id = "001"