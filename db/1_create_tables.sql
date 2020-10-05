# Docker should have already created, but if used another way, will ensure database has been created
CREATE DATABASE IF NOT EXISTS `MOVIE_DB`;
USE `MOVIE_DB`;

# Create table structure
DROP TABLE IF EXISTS `movies`;
CREATE TABLE `movies`
(
    `id`       int          NOT NULL AUTO_INCREMENT,
    `year`     int          NOT NULL,
    `title`    varchar(255) NOT NULL,
    `origin`   varchar(255) DEFAULT NULL,
    `director` varchar(255) DEFAULT NULL,
    `cast`     varchar(255) DEFAULT NULL,
    `genre`    varchar(255) DEFAULT NULL,
    `wiki`     text,
    `plot`     text,
    PRIMARY KEY (`id`),
    UNIQUE KEY `movies_id_uindex` (`id`)
);


# TODO: Load directly from CSV. MySQL configuration needed around loading infile
# LOAD DATA LOCAL INFILE './movie_plots.csv'
#     INTO TABLE movies
#     FIELDS TERMINATED BY ','
#     ENCLOSED BY '"'
#     LINES TERMINATED BY '\n'
#     IGNORE 1 LINES;
