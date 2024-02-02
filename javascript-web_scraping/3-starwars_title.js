#!/usr/bin/node
// Write a script that prints the title of a Star Wars movie where the
// episode number matches a given integer.

const request = require('request');

const id = process.argv[2];
const endpoint = `https://swapi-api.hbtn.io/api/films/${id}/`;

request.get(endpoint, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  }
});
