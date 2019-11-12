-- for initializing the table with an entry, will be used for the Heroku database.

CREATE TABLE employees (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO employees (name)
VALUES  ('Nicholas Mtabo');