#### Exercício 1
##### a. Remove a coluna salary.
##### b. Trocar gender por sex.
##### c. Alterar para que gender aceite 255 caracteres.
##### d. ALTER TABLE Actor CHANGE gender gender VARCHAR(100).

#### Exercício 2
##### a. 
```
UPDATE Actor
SET 
name = "CLAUDIA RAIA"
birth_date = "1966-12-23"
WHERE id = "003";
```
##### b. 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```
##### c.
```
UPDATE Actor
SET 
name = "Marcos Palmeira",
birth_date = "1965-10-02",
salary = 800000,
gender = "male"
WHERE id = "005";
```
##### d. Aparece a mensagem 0 linha (s) afetada (s) Linhas correspondidas: 0 Alteradas: 0 Avisos: 0. Como o id não existe, não houve alteração do nome.
```
UPDATE Actor
SET name = "CLAUDIA RAIA"
WHERE id = "015";
```
#### Exercício 3
##### a.
```
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";
```
##### b.
```
DELETE FROM Actor
WHERE 
gender = "male" AND
salary > 1000000
```
#### Exercício 4

##### a.
```
SELECT MAX(salary) from Actor;
```
##### b.
```
SELECT MIN(salary) from Actor WHERE gender = "female";
```
##### c.
```
SELECT COUNT(*) from Actor WHERE gender = "female";
```
##### d.
```
SELECT SUM(salary) from Actor;
```
#### Exercício 5

##### a. Mostra quantos Atores e quantas atrizes tem tabela.
##### b.
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
##### c.
```
SELECT * FROM Actor
ORDER BY salary ASC;
```
##### d.
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
##### e.
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```









