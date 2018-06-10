var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  return (a+b)
}

function multiple (a, b) {
  return (a*b)
}

test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  //t.equal(2, multiple(1, 2));
  t.end();
});