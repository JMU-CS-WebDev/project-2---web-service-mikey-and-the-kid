USE gym;
DROP TABLE IF EXISTS person;

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
DROP TABLE IF EXISTS lifts;


INSERT INTO person(personID, weight, yearsTraining, name, age)
VALUES(1, 280, 5, "John", 27);