-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Jan 18. 11:29
-- Kiszolgáló verziója: 10.4.19-MariaDB
-- PHP verzió: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `s4_project_m`
--
CREATE DATABASE IF NOT EXISTS `s4_project_m` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `s4_project_m`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ertekeles`
--

CREATE TABLE `ertekeles` (
  `ertekeles_id` int(11) NOT NULL,
  `ertekeles_nev` varchar(50) CHARACTER SET utf16 COLLATE utf16_hungarian_ci NOT NULL,
  `ertekeles_uzenet` varchar(100) CHARACTER SET utf16 COLLATE utf16_hungarian_ci NOT NULL,
  `ertekeles_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- A tábla adatainak kiíratása `ertekeles`
--

INSERT INTO `ertekeles` (`ertekeles_id`, `ertekeles_nev`, `ertekeles_uzenet`, `ertekeles_date`) VALUES
(2, 'dfs', 'XDDDDD', '2022-01-18'),
(3, 'teest', 'eawaad', '2022-01-18'),
(4, 'test', 'test', '2022-01-18');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `score`
--

CREATE TABLE `score` (
  `score_id` int(11) NOT NULL,
  `score_user_id` int(11) NOT NULL,
  `score_scored_point` int(11) NOT NULL,
  `score_date_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `statisztika`
--

CREATE TABLE `statisztika` (
  `statisztika_id` int(11) NOT NULL,
  `statisztika_nev` varchar(50) NOT NULL,
  `statisztika_pont` int(11) NOT NULL,
  `statisztika_halal` int(11) NOT NULL,
  `statisztika_ido` int(11) NOT NULL,
  `statisztika_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- A tábla adatainak kiíratása `statisztika`
--

INSERT INTO `statisztika` (`statisztika_id`, `statisztika_nev`, `statisztika_pont`, `statisztika_halal`, `statisztika_ido`, `statisztika_date`) VALUES
(1, 'wqewq', 5000, 35, 15, '2021-12-03');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `user_personal_highscore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_personal_highscore`) VALUES
(1, 'nigr', 0),
(2, 'test', 420);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `ertekeles`
--
ALTER TABLE `ertekeles`
  ADD PRIMARY KEY (`ertekeles_id`);

--
-- A tábla indexei `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`score_id`),
  ADD KEY `score_user_id` (`score_user_id`);

--
-- A tábla indexei `statisztika`
--
ALTER TABLE `statisztika`
  ADD PRIMARY KEY (`statisztika_id`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `ertekeles`
--
ALTER TABLE `ertekeles`
  MODIFY `ertekeles_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `score`
--
ALTER TABLE `score`
  MODIFY `score_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `statisztika`
--
ALTER TABLE `statisztika`
  MODIFY `statisztika_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`score_user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
