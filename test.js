const { add } = require('./index');


if (add(2, 3) !== 5) {
  console.error('Test failed: add(2, 3) should be 5');
  proces.exit(1);
}
else {
  console.log('Test passed: add(2, 3) is 5');
  process.exit(0);
}