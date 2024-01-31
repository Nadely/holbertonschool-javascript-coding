function welcome() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (input) => {
    const name = input.trim();
    if (name.toLowerCase() === 'exit' || name.toLowerCase() === 'quit') {
      console.log('This important software is now closing');
      process.exit();
    } else {
      console.log(`Your name is: ${name}`);
    }
  });
}

module.exports = welcome;

if (require.main === module) {
  welcome();
}
