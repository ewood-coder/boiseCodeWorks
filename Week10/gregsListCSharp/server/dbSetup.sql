-- Active: 1715613992165@@127.0.0.1@3306@happy_skeleton_c7a82b_db
CREATE TABLE IF NOT EXISTS accounts (
    id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    name varchar(255) COMMENT 'User Name',
    email varchar(255) COMMENT 'User Email',
    picture varchar(255) COMMENT 'User Picture'
) default charset utf8mb4 COMMENT '';

DROP TABLE accounts;

-- SECTION: CARS ------------------------------------------------------------------------------
CREATE TABLE cars (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT UNSIGNED NOT NULL,
    price INT UNSIGNED NOT NULL,
    imgUrl VARCHAR(1000) NOT NULL,
    description VARCHAR(1000),
    engineType ENUM(
        "V6",
        "V8",
        "V10",
        "4-Cylinder",
        "chuncko",
        "unknown"
    ),
    color VARCHAR(255),
    mileage INT NOT NULL,
    hasCleanTitle BOOLEAN NOT NULL,
    creatorId VARCHAR(255) NOT NULL,
    -- FOREIGN KEY will not let a car be created if the creatorId on the car does not match the id of an account
    -- ON DELETE CASCADE gets rid of all orphaned data (if an account is deleted, get rid off all the cars that account created)
    FOREIGN KEY (creatorId) REFERENCES accounts (id) ON DELETE CASCADE
);

INSERT INTO
    cars (
        make,
        model,
        year,
        price,
        imgUrl,
        description,
        engineType,
        color,
        mileage,
        hasCleanTitle,
        creatorId
    )
VALUES (
        "George",
        "Jetson",
        2000,
        1000000,
        "https://images.unsplash.com/photo-1598558543997-cd2a5d01c559?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "Poot poot",
        "unknown",
        "silver",
        0,
        true,
        "66438c07712cf377438dedc3"
    );

SELECT * FROM cars;

SELECT * FROM accounts WHERE id = "65f87bc1e02f1ee243874743";

SELECT * FROM cars JOIN accounts ON cars.creatorId = accounts.id;

-- SECTION: HOUSES ------------------------------------------------------------------------------
CREATE TABLE houses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sqft INT NOT NULL,
    bedrooms INT NOT NULL,
    bathrooms DOUBLE NOT NULL,
    imgUrl VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    creatorId VARCHAR(255) NOT NULL,
    -- FOREIGN KEY will not let a house be created if the creatorId on the house does not match the id of an account
    -- ON DELETE CASCADE gets rid of all orphaned data (if an account is deleted, get rid off all the houses that account created)
    FOREIGN KEY (creatorId) REFERENCES accounts (id) ON DELETE CASCADE
);

INSERT INTO
    houses (
        sqft,
        bedrooms,
        bathrooms,
        imgUrl,
        description,
        price,
        creatorId
    )
VALUES (
        1400,
        5,
        2.5,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOAeh9uaDomCyuEMFRvLHBfwmViMlyqV4Vrw&usqp=CAU",
        "troiangul",
        500000,
        "6616e2046206c73ebc993555"
    );

DROP TABLE houses;

SELECT * FROM houses;

-- This is MY account id
SELECT * FROM accounts WHERE id = "6616e2046206c73ebc993555";

SELECT * FROM houses JOIN accounts ON houses.creatorId = accounts.id;