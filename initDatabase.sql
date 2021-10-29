DROP DATABASE IF EXISTS gym;
DROP USER if EXISTS gym_user@localhost;

CREATE DATABASE gym CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

CREATE USER gym_user@localhost IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL PRIVILEGES ON gym.* TO gym_user@localhost;