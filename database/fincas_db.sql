-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2020 a las 11:09:08
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fincas_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id_departamento` int(11) NOT NULL,
  `nombre_departamento` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id_departamento`, `nombre_departamento`) VALUES
(1, 'Caldas'),
(2, 'Risaralda');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fincas`
--

CREATE TABLE `fincas` (
  `id_finca` int(11) NOT NULL,
  `nombre_finca` varchar(50) NOT NULL,
  `id_propietario` int(11) NOT NULL,
  `id_vereda` int(11) NOT NULL,
  `id_municipio` int(11) NOT NULL,
  `id_departamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fincas`
--

INSERT INTO `fincas` (`id_finca`, `nombre_finca`, `id_propietario`, `id_vereda`, `id_municipio`, `id_departamento`) VALUES
(1, 'Los Pinos', 1053610096, 1, 1, 1),
(2, 'La Hacienda Grande', 1053610096, 2, 1, 1),
(3, 'La Hacienda Pequeña', 1053610096, 1, 2, 2),
(4, 'Los Robles', 1053610096, 2, 2, 2),
(5, 'Las Aguas Mansas', 1053610096, 1, 1, 1),
(6, 'El Remanso', 1053858851, 2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `finca_personas`
--

CREATE TABLE `finca_personas` (
  `id_finca` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `finca_personas`
--

INSERT INTO `finca_personas` (`id_finca`, `id_persona`) VALUES
(1, 1053610096),
(1, 1053858851),
(2, 1053610096),
(3, 1058819118),
(6, 1053858851);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `finca_trabajadores`
--

CREATE TABLE `finca_trabajadores` (
  `id_finca` int(11) NOT NULL,
  `id_trabajador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `finca_trabajadores`
--

INSERT INTO `finca_trabajadores` (`id_finca`, `id_trabajador`) VALUES
(1, 1000000001),
(1, 1000000002),
(4, 1000000003);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `id_municipio` int(11) NOT NULL,
  `nombre_municipio` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`id_municipio`, `nombre_municipio`) VALUES
(1, 'Manizales'),
(2, 'Pereira');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parentezcos`
--

CREATE TABLE `parentezcos` (
  `id_parentezco` int(11) NOT NULL,
  `tipo_parentezco` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `parentezcos`
--

INSERT INTO `parentezcos` (`id_parentezco`, `tipo_parentezco`) VALUES
(1, 'Esposo(a)'),
(2, 'Hijo(a)'),
(3, 'Hermano(a)'),
(4, 'Sobrino(a)'),
(5, 'Tío(a)');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_persona` int(11) NOT NULL,
  `nombre_persona` varchar(50) NOT NULL,
  `apellido_persona` varchar(50) NOT NULL,
  `telefono_persona` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_persona`, `nombre_persona`, `apellido_persona`, `telefono_persona`) VALUES
(1053610096, 'Ricardo', 'Sandoval', '3004985511'),
(1053858851, 'Mariana', 'Rivera', '3105209051'),
(1058819118, 'Laura', 'Rivera', '3004983333');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_parentezcos`
--

CREATE TABLE `persona_parentezcos` (
  `id_persona1` int(11) NOT NULL,
  `id_persona2` int(11) NOT NULL,
  `id_parentezco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona_parentezcos`
--

INSERT INTO `persona_parentezcos` (`id_persona1`, `id_persona2`, `id_parentezco`) VALUES
(1053610096, 1053858851, 1),
(1053858851, 1058819118, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `id_trabajador` int(11) NOT NULL,
  `nombre_trabajador` varchar(50) NOT NULL,
  `apellido_trabajador` varchar(50) NOT NULL,
  `telefono_trabajador` varchar(15) DEFAULT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `salario` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`id_trabajador`, `nombre_trabajador`, `apellido_trabajador`, `telefono_trabajador`, `cargo`, `salario`) VALUES
(1000000001, 'Jonny', 'Perez', '3004985511', 'Capataz', 1500000),
(1000000002, 'Ruth', 'Ocampo', '3004441234', 'Ama de llaves', 1200000),
(1000000003, 'Jaime', 'Galves', '3004448888', 'Jardinero', 1000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `veredas`
--

CREATE TABLE `veredas` (
  `id_vereda` int(11) NOT NULL,
  `nombre_vereda` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `veredas`
--

INSERT INTO `veredas` (`id_vereda`, `nombre_vereda`) VALUES
(1, 'Alto Bonito'),
(2, 'El Porvenir'),
(3, 'Tablazo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id_departamento`);

--
-- Indices de la tabla `fincas`
--
ALTER TABLE `fincas`
  ADD PRIMARY KEY (`id_finca`),
  ADD KEY `id_propietario` (`id_propietario`),
  ADD KEY `id_vereda` (`id_vereda`),
  ADD KEY `id_municipio` (`id_municipio`),
  ADD KEY `id_departamento` (`id_departamento`);

--
-- Indices de la tabla `finca_personas`
--
ALTER TABLE `finca_personas`
  ADD PRIMARY KEY (`id_finca`,`id_persona`),
  ADD KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `finca_trabajadores`
--
ALTER TABLE `finca_trabajadores`
  ADD PRIMARY KEY (`id_finca`,`id_trabajador`),
  ADD KEY `id_trabajador` (`id_trabajador`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`id_municipio`);

--
-- Indices de la tabla `parentezcos`
--
ALTER TABLE `parentezcos`
  ADD PRIMARY KEY (`id_parentezco`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id_persona`);

--
-- Indices de la tabla `persona_parentezcos`
--
ALTER TABLE `persona_parentezcos`
  ADD PRIMARY KEY (`id_persona1`,`id_persona2`),
  ADD KEY `id_persona2` (`id_persona2`),
  ADD KEY `id_parentezco` (`id_parentezco`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`id_trabajador`);

--
-- Indices de la tabla `veredas`
--
ALTER TABLE `veredas`
  ADD PRIMARY KEY (`id_vereda`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id_departamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `fincas`
--
ALTER TABLE `fincas`
  MODIFY `id_finca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `municipios`
--
ALTER TABLE `municipios`
  MODIFY `id_municipio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `parentezcos`
--
ALTER TABLE `parentezcos`
  MODIFY `id_parentezco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `veredas`
--
ALTER TABLE `veredas`
  MODIFY `id_vereda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fincas`
--
ALTER TABLE `fincas`
  ADD CONSTRAINT `fincas_ibfk_1` FOREIGN KEY (`id_propietario`) REFERENCES `personas` (`id_persona`),
  ADD CONSTRAINT `fincas_ibfk_2` FOREIGN KEY (`id_vereda`) REFERENCES `veredas` (`id_vereda`),
  ADD CONSTRAINT `fincas_ibfk_3` FOREIGN KEY (`id_municipio`) REFERENCES `municipios` (`id_municipio`),
  ADD CONSTRAINT `fincas_ibfk_4` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`);

--
-- Filtros para la tabla `finca_personas`
--
ALTER TABLE `finca_personas`
  ADD CONSTRAINT `finca_personas_ibfk_1` FOREIGN KEY (`id_finca`) REFERENCES `fincas` (`id_finca`),
  ADD CONSTRAINT `finca_personas_ibfk_2` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`);

--
-- Filtros para la tabla `finca_trabajadores`
--
ALTER TABLE `finca_trabajadores`
  ADD CONSTRAINT `finca_trabajadores_ibfk_1` FOREIGN KEY (`id_finca`) REFERENCES `fincas` (`id_finca`),
  ADD CONSTRAINT `finca_trabajadores_ibfk_2` FOREIGN KEY (`id_trabajador`) REFERENCES `trabajadores` (`id_trabajador`);

--
-- Filtros para la tabla `persona_parentezcos`
--
ALTER TABLE `persona_parentezcos`
  ADD CONSTRAINT `persona_parentezcos_ibfk_1` FOREIGN KEY (`id_persona1`) REFERENCES `personas` (`id_persona`),
  ADD CONSTRAINT `persona_parentezcos_ibfk_2` FOREIGN KEY (`id_persona2`) REFERENCES `personas` (`id_persona`),
  ADD CONSTRAINT `persona_parentezcos_ibfk_3` FOREIGN KEY (`id_parentezco`) REFERENCES `parentezcos` (`id_parentezco`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
