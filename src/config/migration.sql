CREATE DATABASE `gt_db`;

USE `gt_db`;

CREATE TABLE `usuario` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(100) UNIQUE NOT NULL,
  `senha` varchar(100) NOT NULL,
  `role` varchar(10) NOT NULL,
  `criado_em` timestamp DEFAULT (now()),
  `atualizado_em` timestamp DEFAULT (now())
);

CREATE TABLE `aluno` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `usuario_id` int NOT NULL,
  `endereco_id` int NOT NULL,
  `criado_em` timestamp DEFAULT (now()),
  `atualizado_em` timestamp DEFAULT (now())
);

CREATE TABLE `professor` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `disciplina` varchar(100) NOT NULL,
  `usuario_id` int NOT NULL,
  `endereco_id` int NOT NULL,
  `criado_em` timestamp DEFAULT (now()),
  `atualizado_em` timestamp DEFAULT (now())
);

CREATE TABLE `endereco` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `complemento` varchar(100),
  `criado_em` timestamp DEFAULT (now()),
  `atualizado_em` timestamp DEFAULT (now())
);

CREATE TABLE `turma` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `ano` int NOT NULL,
  `professor_id` int NOT NULL,
  `criado_em` timestamp DEFAULT (now()),
  `atualizado_em` timestamp DEFAULT (now())
);

CREATE TABLE `aluno_turma` (
  `aluno_id` int NOT NULL,
  `turma_id` int NOT NULL,
  PRIMARY KEY (`aluno_id`, `turma_id`)
);

CREATE TABLE `avaliacao` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `aluno_id` int NOT NULL,
  `turma_id` int NOT NULL,
  `professor_id` int NOT NULL,
  `nota` decimal(4,2) NOT NULL,
  `data_avaliacao` date NOT NULL,
  `observacao` varchar(255),
  `criado_em` timestamp DEFAULT (now()),
  `atualizado_em` timestamp DEFAULT (now())
);

ALTER TABLE `aluno_turma` COMMENT = 'Relacionamento N:N entre alunos e turmas';

ALTER TABLE `aluno` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

ALTER TABLE `aluno` ADD FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`);

ALTER TABLE `professor` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);

ALTER TABLE `professor` ADD FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`);

ALTER TABLE `turma` ADD FOREIGN KEY (`professor_id`) REFERENCES `professor` (`id`);

ALTER TABLE `aluno_turma` ADD FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`);

ALTER TABLE `aluno_turma` ADD FOREIGN KEY (`turma_id`) REFERENCES `turma` (`id`);

ALTER TABLE `avaliacao` ADD FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`);

ALTER TABLE `avaliacao` ADD FOREIGN KEY (`turma_id`) REFERENCES `turma` (`id`);

ALTER TABLE `avaliacao` ADD FOREIGN KEY (`professor_id`) REFERENCES `professor` (`id`);
