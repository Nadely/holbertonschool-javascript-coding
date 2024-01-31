function welcome() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (input) => {
    const name = input.toString();
    process.stdout.write(`Your name is: ${name}`);

    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
}

module.exports = welcome;

if (require.main === module) {
  welcome();
}
