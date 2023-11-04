-- CreateTable
CREATE TABLE `Company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCliente` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `razaoSocial` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(200) NOT NULL,
    `cep` VARCHAR(200) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(200) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Company_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
