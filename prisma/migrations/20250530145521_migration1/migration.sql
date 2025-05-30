-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'ALUNO', 'PROFESSOR') NOT NULL DEFAULT 'ADMIN',
    `email_verificado` BOOLEAN NOT NULL DEFAULT false,
    `codigo_verificacao` VARCHAR(6) NULL,
    `codigo_expiracao` DATETIME(3) NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(10) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(2) NOT NULL,
    `cep` VARCHAR(8) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL,

    INDEX `endereco_cep_idx`(`cep`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `data_nascimento` DATETIME(3) NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `endereco_id` INTEGER NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL,

    UNIQUE INDEX `aluno_usuario_id_key`(`usuario_id`),
    UNIQUE INDEX `aluno_endereco_id_key`(`endereco_id`),
    INDEX `aluno_nome_idx`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aluno` ADD CONSTRAINT `aluno_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aluno` ADD CONSTRAINT `aluno_endereco_id_fkey` FOREIGN KEY (`endereco_id`) REFERENCES `endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
