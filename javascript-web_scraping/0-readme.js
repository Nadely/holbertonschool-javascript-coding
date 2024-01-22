#!/usr/bin/node
// Write a script that reads and prints the content of a file.

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, fileContent) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(fileContent);
  }
});
