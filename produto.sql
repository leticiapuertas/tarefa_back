CREATE TABLE produto(
	id_produto int,
	nome_produto varchar(40),
	quantidade int,
	data_produto date,
	nome_cliente varchar(40),
	descricao varchar(60)

	
);

INSERT INTO produto VALUES
	(11258,'pão', 1,'2023-02-21', 'Rodolfo', 'sem descricao'),
	(11358,'molho de tomate', 3,'2023-02-21', 'Rebeca', 'sem descricao'),
	(11458,'achocolatado', 2,'2023-02-21', 'Pedro', 'sem descricao');

	select * from produto