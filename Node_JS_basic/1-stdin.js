function welcome() {
  process.stdout.write('Welcome to Holberton School, what is your name?');
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (input) => {
    const name = input.trim();
    process.stdout.write(`Your name is: ${name}`);

    process.stdout.write('This important software is now closing');
    process.exit();
  });
}

module.exports = welcome;

if (require.main === module) {
  welcome();
}
