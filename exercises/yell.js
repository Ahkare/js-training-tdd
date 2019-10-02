'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(string) {
    return string.toUpperCase()
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell("abc"), "ABC");
assert.strictEqual(yell("Elephant"), "ELEPHANT");
assert.strictEqual(yell("ABcdE"), "ABCDE");
assert.strictEqual(yell("OHBZVojbfOeauOUBAEF"), "OHBZVOJBFOEAUOUBAEF");
// End of tests */
