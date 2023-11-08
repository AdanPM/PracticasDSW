-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2023 a las 03:05:09
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escuela`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `Matricula` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `idGrupo` int(11) NOT NULL,
  `idFacultad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`Matricula`, `Nombre`, `Apellido`, `idGrupo`, `idFacultad`) VALUES
(901, 'Adan', 'Preciado', 101, 301),
(902, 'Lizeth', 'Damaso', 102, 302),
(903, 'Kenia', 'Jimenez', 103, 303),
(904, 'Jesus', 'Ruiz', 104, 304),
(905, 'Axel', 'Cuevas', 105, 305);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facultad`
--

CREATE TABLE `facultad` (
  `idFacultad` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `campus` varchar(30) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `cantalumnos` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `facultad`
--

INSERT INTO `facultad` (`idFacultad`, `nombre`, `campus`, `direccion`, `cantalumnos`) VALUES
(301, 'FCA', 'Tijuana', 'Av Universidad', '400'),
(302, 'FEYRI', 'Tijuana', 'Av Universidad', '390'),
(303, 'FMYP', 'Tijuana', 'Av Universidad', '330'),
(304, 'FIYCQ', 'Tijuana', 'Av Universidad', '340'),
(305, 'FD', 'Tijuana', 'Av Universidad', '350');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `idGrupo` int(11) NOT NULL,
  `Grupo` int(11) NOT NULL,
  `Salon` varchar(30) NOT NULL,
  `CantidadAlumnos` int(11) NOT NULL,
  `Maestro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`idGrupo`, `Grupo`, `Salon`, `CantidadAlumnos`, `Maestro`) VALUES
(101, 101, '101A', 30, 201),
(102, 102, '102A', 28, 202),
(103, 103, '103A', 24, 203),
(104, 104, '104A', 32, 204),
(105, 105, '105A', 29, 205);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestro`
--

CREATE TABLE `maestro` (
  `idMaestro` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `idGrupo` int(11) NOT NULL,
  `idFacultad` int(11) NOT NULL,
  `Materia` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maestro`
--

INSERT INTO `maestro` (`idMaestro`, `Nombre`, `Apellido`, `idGrupo`, `idFacultad`, `Materia`) VALUES
(201, 'David', 'Maya', 101, 301, 'Programacion'),
(202, 'Jose', 'Lopez', 102, 302, 'Matematicas'),
(203, 'Laura', 'Mejia', 103, 303, 'Artes'),
(204, 'Sofía', 'Perez', 104, 304, 'Ingles'),
(205, 'Lucía', 'Ruiz', 105, 305, 'Base de datos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`Matricula`),
  ADD KEY `idGrupo` (`idGrupo`),
  ADD KEY `idFacultad` (`idFacultad`);

--
-- Indices de la tabla `facultad`
--
ALTER TABLE `facultad`
  ADD PRIMARY KEY (`idFacultad`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`idGrupo`),
  ADD KEY `Maestro` (`Maestro`);

--
-- Indices de la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD PRIMARY KEY (`idMaestro`),
  ADD KEY `idFacultad` (`idFacultad`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`idGrupo`),
  ADD CONSTRAINT `alumno_ibfk_2` FOREIGN KEY (`idFacultad`) REFERENCES `facultad` (`idFacultad`),
  ADD CONSTRAINT `alumno_ibfk_3` FOREIGN KEY (`idGrupo`) REFERENCES `grupo` (`idGrupo`),
  ADD CONSTRAINT `alumno_ibfk_4` FOREIGN KEY (`idFacultad`) REFERENCES `facultad` (`idFacultad`);

--
-- Filtros para la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD CONSTRAINT `grupo_ibfk_1` FOREIGN KEY (`Maestro`) REFERENCES `maestro` (`idMaestro`),
  ADD CONSTRAINT `grupo_ibfk_2` FOREIGN KEY (`Maestro`) REFERENCES `maestro` (`idMaestro`);

--
-- Filtros para la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD CONSTRAINT `maestro_ibfk_1` FOREIGN KEY (`idFacultad`) REFERENCES `facultad` (`idFacultad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
