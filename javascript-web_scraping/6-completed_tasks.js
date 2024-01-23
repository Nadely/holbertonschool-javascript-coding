#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status Code:', response.statusCode);
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

  console.log(completedTasks);
});
