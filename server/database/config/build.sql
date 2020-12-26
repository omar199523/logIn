BEGIN;

DROP TABLE IF EXISTS users cascade;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(100) NOT NULL,
    userName VARCHAR(40) NOT NULL,
    password VARCHAR(300) NOT NULL,
    typeOfUser VARCHAR(50) NOT NULL
    
);

INSERT INTO users(userName,email,password,typeOfUser) VALUES
    ('oamr199523','model199523@gmail.com','123456789','seller');

COMMIT;