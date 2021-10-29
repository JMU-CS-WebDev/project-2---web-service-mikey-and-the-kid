const express = require("express");
const mysql = require("mysql");
const fs = require('fs');

const { createConnection } = require("net");

const service = express();
const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
const connection = mysql.createConnection(credentials);
//read in credentials JSON

// add middleware that express already provides,
// to parse the request body as json     
service.use(express.json());


connection.connect(error => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
});


const port = 8443;
service.listen(port,  () => {
  console.log(`We're live on port ${port}!`);
});

function rowToMemory(row) {
  return {
    personID: row.personID,
    weight: row.weight,
    yearsTraining: row.yearsTraining,
    name : row.name,
    age: row.age,
    is_deleted: row.is_deleted,
    created_at: row.created_at,
    updated_at: row.updated_at
  };
}

//get
service.get('/person', (request, response) => {
   const query = 'SELECT * FROM person';
   connection.query(query, (error, rows) => {
    if (error) {
      response.status(500);
      response.json({
        ok: false,
        results: error.message,
      });
    } else {
      const memories = rows.map(rowToMemory);
      response.json({
        ok: true,
        results: rows.map(rowToMemory),
      });
    }
  });

});
//post
service.post('/insert', (request, response) => {
  const parameters =[
    request.body.personID,
    request.body.weight,
    request.body.yearsTraining,
    request.body.name,
    request.body.age
  ];
const query = 'INSERT INTO person(personID, weight, yearsTraining, name, age) VALUES(?, ?, ?, ?, ?)';
connection.query(query, parameters, (error, result) => {
  if (error) {
    response.status(500);
    response.json({
      ok: false,
      results: error.message,
    });
  } else {
    response.json({
      ok: true,
      results: 'It worked!',
    });
  }
});
});

//update
service.patch('/person/:id', (request, response) => {
  const parameters = [
    request.body.weight,
    request.body.yearsTraining,
    request.body.name,
    request.body.age,
    parseInt(request.params.id)
  ];

  const query = 'UPDATE person SET weight = ?, yearsTraining = ?, name = ?, age = ? WHERE personID = ?';
  connection.query(query, parameters, (error, result) => {
    if (error) {
      response.status(404);
      response.json({
        ok: false,
        results: error.message,
      });
    } else {
      response.json({
        ok: true,
      });
    }
  });
});

//delete
service.delete('/remove/:id', (request, response) => {
  const parameters = [parseInt(request.params.id)];
 
  const query = 'DELETE FROM person WHERE personID = ?';
  connection.query(query, parameters, (error, result) => {
    if (error) {
      response.status(404);
      response.json({
        ok: false,
        results: error.message,
      });
    } else {
      response.json({
        ok: true,
      });
    }
  });
});

