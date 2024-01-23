#!/usr/bin/node
// Write a script that prints the number of movies where
// the character “Wedge Antilles” is present.

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const filmData = JSON.parse(body).results;
    const characterId = '18';
    let numberApparition = 0;

    for (const film of filmData) {
      for (const character of film.characters) {
        if (character.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)) {
          numberApparition += 1;
        }
      }
    }
    console.log(numberApparition);
  }
});
