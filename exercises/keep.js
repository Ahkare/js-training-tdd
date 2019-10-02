'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(string) {
    return string.charAt(0, 1)
}
function keepLast(string) {
    return string.charAt(-2, -1)
}
function keepFirstLast(string) {
    return string.charAt(2, 4)
}
//* Begin of tests
const assert = require('assert');

assert.fail('You must write your own tests');
// End of tests */
