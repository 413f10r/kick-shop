-- MySQL dump 10.13  Distrib 8.0.41, for macos15 (x86_64)
--
-- Host: localhost    Database: db-ecommerce
-- ------------------------------------------------------
-- Server version	9.2.0

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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,NULL),(2,1,NULL),(3,2,NULL),(4,2,NULL),(5,3,NULL),(6,3,NULL),(7,4,NULL),(8,4,NULL),(9,5,NULL),(10,5,NULL),(11,6,NULL),(12,6,NULL),(13,7,NULL),(14,7,NULL),(15,8,NULL),(16,8,NULL),(17,9,NULL),(18,9,NULL),(19,10,NULL),(20,10,NULL),(21,11,NULL),(22,11,NULL),(23,12,NULL),(24,12,NULL),(25,13,NULL),(26,13,NULL),(27,14,NULL),(28,14,NULL),(29,15,NULL),(30,15,NULL),(31,16,NULL),(32,16,NULL),(33,17,NULL),(34,17,NULL),(35,18,NULL),(36,18,NULL),(37,19,NULL),(38,19,NULL),(39,20,NULL),(40,20,NULL),(41,21,NULL),(42,21,NULL),(43,22,NULL),(44,22,NULL),(45,23,NULL),(46,23,NULL),(47,24,NULL),(48,24,NULL),(49,25,NULL),(50,25,NULL),(51,26,NULL),(52,26,NULL),(53,27,NULL),(54,27,NULL),(55,28,NULL),(56,28,NULL),(57,29,NULL),(58,29,NULL),(59,30,NULL),(60,30,NULL),(61,31,NULL),(62,31,NULL),(63,32,NULL),(64,32,NULL),(65,33,NULL),(66,33,NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int unsigned DEFAULT NULL,
  `product_id` int unsigned DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `name_product` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order` (`order_id`),
  KEY `fk_product` (`product_id`),
  CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (1,1,2,3,130.00,'Adidas Predator'),(2,1,5,1,85.00,'Milan Jersey'),(3,1,7,4,40.00,'Adidas Shorts'),(4,3,2,3,130.00,'Adidas Predator'),(5,3,5,1,85.00,'Milan Jersey'),(6,3,7,4,40.00,'Adidas Shorts'),(7,4,2,3,130.00,'Adidas Predator'),(8,4,5,1,85.00,'Milan Jersey'),(9,4,7,4,40.00,'Adidas Shorts'),(10,5,5,2,85.00,'Milan Jersey'),(11,7,5,2,85.00,'Milan Jersey'),(12,8,4,2,90.00,'Juventus Jersey'),(13,8,8,1,150.00,'Nike Tracksuit'),(14,10,4,2,90.00,'Juventus Jersey'),(15,10,8,1,150.00,'Nike Tracksuit'),(16,23,4,2,90.00,'Juventus Jersey'),(17,23,8,1,150.00,'Nike Tracksuit'),(18,64,2,1,130.00,'Adidas Predator'),(19,64,4,2,90.00,'Juventus Jersey'),(20,65,7,1,40.00,'Adidas Shorts'),(21,65,8,1,150.00,'Nike Tracksuit'),(22,65,10,1,75.00,'Adidas Hoodie'),(23,65,11,2,135.00,'Nike Phantom'),(24,66,9,1,120.00,'Puma Jacket'),(25,66,11,3,135.00,'Nike Phantom'),(26,67,1,1,120.00,'Nike Air Zoom'),(27,67,5,1,85.00,'Milan Jersey'),(28,67,19,1,160.00,'Puma Thermal Jacket'),(29,68,1,3,120.00,'Nike Air Zoom'),(30,68,11,4,135.00,'Nike Phantom'),(31,68,27,2,65.00,'Nike Elite Bag'),(32,68,30,2,45.00,'Nike Premium Ball'),(33,69,11,3,135.00,'Nike Phantom'),(34,70,2,1,130.00,'Adidas Predator'),(35,70,10,1,75.00,'Adidas Hoodie'),(36,71,9,1,120.00,'Puma Jacket'),(37,71,13,1,140.00,'Puma One'),(38,73,4,1,90.00,'Juventus Jersey'),(39,73,19,1,160.00,'Puma Thermal Jacket'),(40,74,5,1,85.00,'Milan Jersey'),(41,74,9,1,120.00,'Puma Jacket'),(42,74,14,2,90.00,'Milan Away Jersey'),(43,75,2,1,130.00,'Adidas Predator'),(44,75,3,1,110.00,'Puma Future'),(45,75,12,1,125.00,'Adidas Ace'),(46,76,2,1,130.00,'Adidas Predator'),(47,76,10,1,75.00,'Adidas Hoodie'),(48,76,12,1,125.00,'Adidas Ace'),(49,77,2,1,130.00,'Adidas Predator'),(50,77,10,1,75.00,'Adidas Hoodie'),(51,77,12,1,125.00,'Adidas Ace'),(52,78,6,2,88.00,'Inter Jersey'),(53,78,24,2,160.00,'Nike Performance Tracksuit'),(54,79,1,1,120.00,'Nike Air Zoom'),(55,80,2,1,130.00,'Adidas Predator'),(56,80,10,1,75.00,'Adidas Hoodie'),(57,81,1,1,120.00,'Nike Air Zoom'),(58,81,9,1,120.00,'Puma Jacket'),(59,82,1,1,120.00,'Nike Air Zoom'),(60,82,8,1,150.00,'Nike Tracksuit'),(61,83,2,1,130.00,'Adidas Predator'),(62,83,9,1,120.00,'Puma Jacket'),(63,84,9,1,120.00,'Puma Jacket'),(64,84,13,1,140.00,'Puma One'),(65,85,9,1,120.00,'Puma Jacket'),(66,85,19,1,160.00,'Puma Thermal Jacket'),(67,87,1,43,120.00,'Nike Air Zoom'),(68,86,2,1,130.00,'Adidas Predator');
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `user_surname` varchar(100) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total` decimal(10,2) DEFAULT NULL,
  `address_shipping` varchar(100) DEFAULT NULL,
  `address_invoice` varchar(100) DEFAULT NULL,
  `telephone` char(10) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `payment_method` enum('paypal','stripe','credit-card') DEFAULT NULL,
  `carts` json DEFAULT NULL,
  `shipping_cost` decimal(10,2) DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (86,'mariuo','rossoso','mandbv@rosso.com','2025-04-08 17:23:01',130.00,'xxx','xxxx','1111111111','xxx','Agrigento',NULL,'[{\"quantity\": 1, \"id_product\": 2}]',0.00);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `slug` varchar(100) NOT NULL,
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `availability` int NOT NULL,
  `gender` enum('uomo','donna') DEFAULT NULL,
  `season` enum('estate','inverno','primavera','autunno') DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `tags` enum('jerseys','shorts','tracksuits','jackets','hoodies','balls','goalkeeper gloves','bags','soccer shoes') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('nike-air-zoom',1,'Nike Air Zoom','Scarpe da calcio Nike Air Zoom progettate per garantire prestazioni elevate, con ammortizzazione reattiva, trazione ottimizzata e comfort che dura per tutta la partita.',120.00,43,'uomo','inverno','Nike','soccer shoes'),('adidas-predator',2,'Adidas Predator','Le Adidas Predator offrono un controllo di palla superiore grazie al grip avanzato e al design ergonomico, ideali per i giocatori che dominano il campo.',130.00,30,'uomo','autunno','Adidas','soccer shoes'),('puma-future',3,'Puma Future','Scarpe da calcio Puma Future leggere e flessibili, pensate per garantire massima libertà di movimento e supporto dinamico in ogni fase del gioco.',110.00,29,'donna','primavera','Puma','soccer shoes'),('juventus-jersey',4,'Juventus Jersey','Maglia ufficiale della Juventus in tessuto tecnico traspirante, perfetta per allenamenti e partite grazie al suo design moderno e comfort elevato.',90.00,65,'uomo','estate','Adidas','jerseys'),('milan-jersey',5,'Milan Jersey','Maglia ufficiale AC Milan dallo stile autentico e accattivante, realizzata in materiali leggeri e traspiranti per il massimo del comfort.',85.00,57,'uomo','estate','Puma','jerseys'),('inter-jersey',6,'Inter Jersey','La maglia ufficiale dell\'Inter è pensata per i tifosi nerazzurri, con tessuto tecnico e dettagli iconici per un look autentico.',88.00,63,'uomo','estate','Nike','jerseys'),('adidas-shorts',7,'Adidas Shorts','Pantaloncini Adidas leggeri, ideali per l\'attività fisica grazie alla loro traspirabilità e al taglio sportivo che favorisce la libertà di movimento.',40.00,95,'uomo','primavera','Adidas','shorts'),('nike-tracksuit',8,'Nike Tracksuit','Tuta sportiva Nike dal design moderno e atletico, ideale per l\'allenamento e il tempo libero, offre protezione dal freddo e stile impeccabile.',150.00,27,'uomo','inverno','Nike','tracksuits'),('puma-jacket',9,'Puma Jacket','Giacca sportiva Puma progettata per proteggerti dalle intemperie, con materiali resistenti e comfort termico per le stagioni più fresche.',120.00,13,'donna','autunno','Puma','jackets'),('adidas-hoodie',10,'Adidas Hoodie','Felpa con cappuccio Adidas, ideale per la stagione fredda, combina stile sportivo e comfort termico con un tessuto morbido e resistente.',75.00,75,'uomo','inverno','Adidas','hoodies'),('nike-phantom',11,'Nike Phantom','Scarpe da calcio Nike Phantom studiate per il controllo e la precisione, con una tomaia tecnica che migliora la sensibilità e l\'aderenza.',135.00,33,'uomo','primavera','Nike','soccer shoes'),('adidas-ace',12,'Adidas Ace','Le Adidas Ace sono scarpe da calcio ideate per un controllo eccellente del pallone, perfette per giocatori che amano gestire il gioco con precisione.',125.00,47,'uomo','estate','Adidas','soccer shoes'),('puma-one',13,'Puma One','Puma One unisce comfort, velocità e leggerezza in una scarpa da calcio versatile, ideale per performance elevate in ogni ruolo.',140.00,58,'uomo','inverno','Puma','soccer shoes'),('milan-away-jersey',14,'Milan Away Jersey','Maglia ufficiale Milan Away 2022/23 in tessuto traspirante, perfetta per i tifosi che vogliono sostenere la propria squadra con stile.',90.00,53,'uomo','estate','Puma','jerseys'),('juventus-away-jersey',15,'Juventus Away Jersey','Maglia Juventus Away stagione 2022/23, realizzata in tessuti tecnici di ultima generazione, dal design accattivante e confortevole.',95.00,65,'uomo','estate','Adidas','jerseys'),('inter-away-jersey',16,'Inter Away Jersey','Maglia Inter Away 2022/23 con finiture premium e tessuto leggero, ideale per sostenere la squadra con un look da vero tifoso.',92.00,60,'uomo','estate','Nike','jerseys'),('adidas-training-shorts',17,'Adidas Training Shorts','Pantaloncini Adidas da allenamento pensati per l\'alta performance, con tessuto tecnico leggero e design ergonomico per il massimo della mobilità.',45.00,120,'uomo','primavera','Adidas','shorts'),('nike-training-shorts',18,'Nike Training Shorts','Pantaloncini Nike da allenamento in tessuto traspirante e confortevole, ideali per ogni tipo di attività fisica nella stagione calda.',48.00,110,'uomo','primavera','Nike','shorts'),('puma-thermal-jacket',19,'Puma Thermal Jacket','Giacca invernale termica Puma progettata per offrire isolamento ottimale e protezione dal freddo con un design moderno e sportivo.',160.00,22,'donna','inverno','Puma','jackets'),('adidas-soft-shell-jacket',20,'Adidas Soft Shell Jacket','Adidas Soft Shell Jacket offre protezione contro il freddo e il vento, con tessuto caldo e dettagli ergonomici per un comfort superiore.',155.00,40,'uomo','inverno','Adidas','jackets'),('nike-winter-hoodie',21,'Nike Winter Hoodie','Felpa Nike con cappuccio ideale per l\'inverno, morbida al tatto e realizzata in tessuto spesso per garantire calore e comfort.',80.00,70,'uomo','inverno','Nike','hoodies'),('puma-cotton-hoodie',22,'Puma Cotton Hoodie','Felpa Puma in cotone con cappuccio pensata per offrire morbidezza e stile casual, perfetta per la stagione autunnale.',70.00,85,'donna','autunno','Puma','hoodies'),('adidas-zip-hoodie',23,'Adidas Zip Hoodie','Adidas Zip Hoodie con cappuccio e chiusura frontale, dal design sportivo e versatile, adatta per tutte le stagioni.',72.00,100,'uomo','autunno','Adidas','hoodies'),('nike-performance-tracksuit',24,'Nike Performance Tracksuit','Nike Performance Tracksuit è la tuta ideale per chi cerca massima performance e comfort, realizzata con materiali tecnici di qualità.',160.00,48,'uomo','inverno','Nike','tracksuits'),('puma-rain-jacket',25,'Puma Rain Jacket','Giacca antipioggia leggera Puma, impermeabile e traspirante, perfetta per affrontare le giornate umide con stile sportivo.',130.00,45,'donna','autunno','Puma','jackets'),('adidas-elite-bag',26,'Adidas Elite Bag','Borsa Adidas Elite dal design compatto e resistente, perfetta per trasportare l\'attrezzatura sportiva in modo pratico e sicuro.',60.00,110,'uomo','primavera','Adidas','bags'),('nike-elite-bag',27,'Nike Elite Bag','Nike Elite Bag è la borsa sportiva ideale per chi cerca funzionalità e stile, con scomparti capienti e materiali durevoli.',65.00,98,'uomo','primavera','Nike','bags'),('puma-training-ball',28,'Puma Training Ball','Pallone da allenamento Puma resistente e leggero, progettato per offrire durata e controllo in ogni sessione di gioco.',35.00,150,'uomo','primavera','Puma','balls'),('adidas-training-ball',29,'Adidas Training Ball','Pallone Adidas per allenamento con struttura durevole e superficie testurizzata per un tocco e una precisione migliorati.',37.00,130,'uomo','estate','Adidas','balls'),('nike-premium-ball',30,'Nike Premium Ball','Nike Premium Ball è un pallone da calcio di alta qualità, pensato per prestazioni elevate grazie alla sua costruzione tecnica avanzata.',45.00,98,'uomo','estate','Nike','balls'),('adidas-match-ball',31,'Adidas Match Ball','Pallone ufficiale Adidas da competizione, realizzato secondo gli standard FIFA, con materiali premium per prestazioni top-level.',55.00,60,'uomo','estate','Adidas','balls'),('puma-street-ball',32,'Puma Street Ball','Puma Street Ball è perfetto per le partite su strada, con una struttura resistente e un grip eccellente su superfici dure.',39.90,60,'uomo','primavera','Puma','balls'),('molten-training-ball',33,'Molten Training Ball','Molten Training Ball è un pallone da allenamento professionale adatto a tutte le superfici, con lunga durata e ottimo controllo palla.',34.90,60,'uomo','autunno','Molten','balls');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `size` enum('35','36','37','38','39','40','41','42','43','44','45','46','47','XS','S','M','L','XL','XXL') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-08 17:26:58
