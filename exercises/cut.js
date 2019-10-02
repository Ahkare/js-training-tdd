'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str) {
  const length = str.length;

  return str.slice(2, length);
}

function cutLast(str) {
  const length = str.length;

  return str.slice(0, (length - 2));
}

function cutFirstLast(str) {
  const length = str.length;

  return str.slice(2, (length - 2));
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirst("i don't know where i am"), "don't know where i am");
assert.strictEqual(cutLast('Elephant'), 'Elepha');
assert.strictEqual(cutFirstLast('Giraffe'), 'raf');
// End of tests */
