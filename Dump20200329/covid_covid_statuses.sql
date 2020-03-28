-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: covid
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `covid_statuses`
--

DROP TABLE IF EXISTS `covid_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `covid_statuses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `confirmed` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recovered` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deaths` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `negative` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `covid_statuses`
--

LOCK TABLES `covid_statuses` WRITE;
/*!40000 ALTER TABLE `covid_statuses` DISABLE KEYS */;
INSERT INTO `covid_statuses` VALUES (1,'115','3','4','512','2020-03-22 19:30:44','2020-03-22 19:30:44'),(2,'143','5','4','643','2020-03-23 17:00:44','2020-03-23 17:00:44'),(3,'170','6','5','685','2020-03-24 17:00:44','2020-03-24 17:00:44'),(4,'225','7','6','740','2020-03-25 17:00:44','2020-03-25 17:00:44'),(13,'275','8','10','931','2020-03-26 17:59:02','2020-03-26 17:59:02'),(14,'345','11','23','1423','2020-03-27 20:00:26','2020-03-27 20:00:26'),(15,'402','12','25','1574','2020-03-28 09:39:34','2020-03-28 21:53:58');
/*!40000 ALTER TABLE `covid_statuses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-29  0:11:47
