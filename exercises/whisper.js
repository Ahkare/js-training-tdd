'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(string) {
    let lowerString = string.toLowerCase();

    return "*" + lowerString + "*"
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper("abc"), "*abc*");
assert.strictEqual(whisper("Elephant"), "*elephant*");
assert.strictEqual(whisper("ABCDE"), "*abcde*");
assert.strictEqual(whisper("OHBZVojbfOeauOUBAEF"), "*ohbzvojbfoeauoubaef*");
// End of tests */
