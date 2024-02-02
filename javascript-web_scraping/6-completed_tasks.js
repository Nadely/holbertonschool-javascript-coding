#!/usr/bin/node
// Write a script that computes the number of tasks completed by user id

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
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
  }
});
