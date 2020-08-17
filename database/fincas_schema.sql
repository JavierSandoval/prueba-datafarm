-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fincas_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `fincas_db` ;

-- -----------------------------------------------------
-- Schema fincas_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fincas_db` ;
USE `fincas_db` ;

-- CREATE USER 'user_df'@'localhost' IDENTIFIED BY 'pass_df';
-- GRANT ALL PRIVILEGES ON * . * TO 'user_df'@'localhost';
-- FLUSH PRIVILEGES;

-- -----------------------------------------------------
-- Table `fincas_db`.`veredas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`veredas` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`veredas` (
  `id_vereda` INT NOT NULL AUTO_INCREMENT,
  `nombre_vereda` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_vereda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`municipios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`municipios` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`municipios` (
  `id_municipio` INT NOT NULL AUTO_INCREMENT,
  `nombre_municipio` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_municipio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`departamentos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`departamentos` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`departamentos` (
  `id_departamento` INT NOT NULL AUTO_INCREMENT,
  `nombre_departamento` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_departamento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`personas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`personas` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`personas` (
  `id_persona` INT NOT NULL,
  `nombre_persona` VARCHAR(50) NOT NULL,
  `apellido_persona` VARCHAR(50) NOT NULL,
  `telefono_persona` VARCHAR(15) NULL,
  PRIMARY KEY (`id_persona`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`trabajadores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`trabajadores` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`trabajadores` (
  `id_trabajador` INT NOT NULL,
  `nombre_trabajador` VARCHAR(50) NOT NULL,
  `apellido_trabajador` VARCHAR(50) NOT NULL,
  `telefono_trabajador` VARCHAR(15) NULL,
  `cargo` VARCHAR(45) NULL,
  `salario` DOUBLE NULL,
  PRIMARY KEY (`id_trabajador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`fincas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`fincas` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`fincas` (
  `id_finca` INT NOT NULL AUTO_INCREMENT,
  `nombre_finca` VARCHAR(50) NOT NULL,
  `id_propietario` INT NOT NULL,
  `id_vereda` INT NOT NULL,
  `id_municipio` INT NOT NULL,
  `id_departamento` INT NOT NULL,
  PRIMARY KEY (`id_finca`),
  FOREIGN KEY (`id_propietario`) REFERENCES personas(`id_persona`),
  FOREIGN KEY (`id_vereda`) REFERENCES veredas(`id_vereda`),
  FOREIGN KEY (`id_municipio`) REFERENCES municipios(`id_municipio`),
  FOREIGN KEY (`id_departamento`) REFERENCES departamentos(`id_departamento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`parentezcos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`parentezcos` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`parentezcos` (
  `id_parentezco` INT NOT NULL AUTO_INCREMENT,
  `tipo_parentezco` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_parentezco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`finca_persona`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`finca_personas` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`finca_personas` (
  `id_finca` INT NOT NULL,
  `id_persona` INT NOT NULL,
  PRIMARY KEY (`id_finca`, `id_persona`),
  FOREIGN KEY (`id_finca`) REFERENCES fincas(`id_finca`),
  FOREIGN KEY (`id_persona`) REFERENCES personas(`id_persona`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`finca_trabajador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`finca_trabajadores` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`finca_trabajadores` (
  `id_finca` INT NOT NULL,
  `id_trabajador` INT NOT NULL,
  PRIMARY KEY (`id_finca`, `id_trabajador`),
  FOREIGN KEY (`id_finca`) REFERENCES fincas(`id_finca`),
  FOREIGN KEY (`id_trabajador`) REFERENCES trabajadores(`id_trabajador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fincas_db`.`persona_parentezco`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `fincas_db`.`persona_parentezcos` ;

CREATE TABLE IF NOT EXISTS `fincas_db`.`persona_parentezcos` (
  `id_persona1` INT NOT NULL,
  `id_persona2` INT NOT NULL,
  `id_parentezco` INT NOT NULL,
  PRIMARY KEY (`id_persona1`, `id_persona2`),
  FOREIGN KEY (`id_persona1`) REFERENCES personas(`id_persona`),
  FOREIGN KEY (`id_persona2`) REFERENCES personas(`id_persona`),
  FOREIGN KEY (`id_parentezco`) REFERENCES parentezcos(`id_parentezco`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
