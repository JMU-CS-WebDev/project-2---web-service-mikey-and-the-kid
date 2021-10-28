const express = require("express");
const { createConnection } = require("net");

const service = express();

// add middleware that express already provides,
// to parse the request body as json     
service.use(express.json());

// The resource to share.
const dictionary = {
  duck: {
    word: "duck",
    definitions: [
      {
        id: 0,
        likes: 57,
        definition: "funky",
      },
      {
        id: 1,
        likes: 4,
        definition: "1612",
      },
    ],
  },
  promise: {
    word: "promise",
    definitions: [
      {
        id: 1,
        likes: 57,
        definition: "what chad couldn't keep",
      },
      {
        id: 0,
        likes: 4,
        definition: "A structure used to represent a pending computation.",
      },
    ],
  },
};

const port = 5000;
service.listen(port, () => {
  console.log(`We're live on port ${port}!`);
});

service.get("/words", (request, response) => {
  response.json({
    ok: true,
    result: Object.keys(dictionary),
  });
});

service.get("/:word", (request, response) => {
  const wordParam = request.params.word;
  response.json({
    ok: true,
    result: dictionary[wordParam],
  });
});
// to test:
// curl -v \
// --request POST \
// --header 'Content-Type: application/json' \
// --data '{"definition": "world wide web"}' \
// http://localhost:5000/www
service.post("/:word", (request, response) => {
  const newWord = request.params.word;
  const newWordDef = request.body.definition;
  // add the new word with its defn to our "database"

  dictionary[newWord] = {
    word: newWord,
    definitions: [
      {
        id: 1,
        likes: 1,
        definition: newWordDef,
      },
    ],
  };

  response.json({
    ok: true,
    result: dictionary[newWord],
  });
});

service.patch("/:word/:definitionId/like", (request, response) => {
  word = request.params.word;
  id = request.params.definitionId;

  dictionary[word].definitions[id].likes++;

  response.json({ 
    ok: true,
    result: dictionary[word],
  });
});

// service.post("/:word", (request, response) => {
//   const newWord = request.params.word;
//   const newWordDefn = request.body.definition;
//   dictionary[newWord] = {
//     word: newWord,
//     definitions: [
//       {
//         id: 1,
//         likes: 1,
//         definition: newWordDefn,
//       },
//     ],
//   };
//   response.json({
//     ok: true,
//     result: dictionary[newWord],
//   });
// });
