#!/usr/bin/node

const util = require('util');
const request = require('request');
const chalk = require('chalk');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(chalk.red('Error:'), error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(chalk.red('Failed to fetch data. Status Code:'), response.statusCode);
    return;
  }

  const todos = JSON.parse(body);
  const completedTasks = {};

  todos.forEach((task) => {
    if (task.completed) {
      const { userId } = task;

      if (!completedTasks[userId]) {
        completedTasks[userId] = 1;
      } else {
        completedTasks[userId] += 1;
      }
    }
  });

  const formattedOutput = util.inspect(completedTasks, { depth: null, colors: true })
    .replace(/^\{\s*/, '{')
    .replace(/\s*\}\s*$/, '}');

  console.log(formattedOutput);
});
