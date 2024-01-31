function welcome() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (input) => {
    const name = input.trim();
    console.log(`Your name is: ${name}`);

    console.log('This important software is now closing');
    process.exit();
  });
}

module.exports = welcome;

if (require.main === module) {
  welcome();
}
