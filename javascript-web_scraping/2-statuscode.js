#!/usr/bin/node
const fetch = require('node-fetch');

const url = process.argv[2];

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log('code:', response.status);
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });
