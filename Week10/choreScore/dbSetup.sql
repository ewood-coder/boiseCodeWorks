-- Active: 1715613992165@@127.0.0.1@3306@happy_skeleton_c7a82b_db
CREATE TABLE IF NOT EXISTS accounts (
    id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    name varchar(255) COMMENT 'User Name',
    email varchar(255) COMMENT 'User Email',
    picture varchar(255) COMMENT 'User Picture'
) default charset utf8mb4 COMMENT '';

-- SECTION: create table
CREATE TABLE chores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    isComplete BOOLEAN DEFAULT false
    -- Maybe add your own additional properties????
)
-- SECTION: Add chores to table
INSERT INTO
    chores (name, description)
VALUES (
        "Feed the raccoons",
        "They really like mini sausages. Just don't feed them after Midnight..."
    )
-- SECTION: Get all columns from chores table
SELECT * FROM chores