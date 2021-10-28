DROP DATABASE IF EXISTS person;

CREATE TABLE person (
    personID SERIAL PRIMARY KEY,
    weight          int,
    yearsTraining   int,
    name            TEXT,
    age             int,
    is_deleted INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);