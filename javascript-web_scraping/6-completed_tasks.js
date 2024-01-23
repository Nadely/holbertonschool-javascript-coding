#!/usr/bin/node
// Write a script that computes the number of tasks completed by user id

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

  const result = {};
  Object.entries(completedTasks).forEach(([userId, completedTasks]) => {
    result[userId] = completedTasks;
  });
  console.log(result);
});
