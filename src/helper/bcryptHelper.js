/**
 * Bcrypt helper
 * Author: Tirthamouli Baidya
 */
const bcrypt = require('bcrypt');

/**
 * Hash a password using bcrypt
 * @param {String} password
*/
function hash(password) {
  // Step 1: Create a promise wrapper
  return new Promise((resolve, reject) => {
    // Step 2: Hash the password
    bcrypt.hash(password, 12, (err, hashedPassword) => {
      // Step 3: Incase of any error, throw a new error
      if (err) {
        return reject(new Error('error with hasing'));
      }

      // Step 4: Resolve when there is no error
      return resolve(hashedPassword);
    });
  });
}

/**
 * Compare password and hash
 * @param {String} password
 * @param {String} hash
 */
function compare(password, hashedPassword) {
  // Step 1: Create a promise wrapper
  return new Promise((resolve, reject) => {
    // Step 2: Compare the password
    bcrypt.compare(password, hashedPassword, (err, result) => {
      // Step 3: Incase of any error, throw a new error
      if (err) {
        return reject(new Error('error during hash'));
      }

      // Step 4: Resolve when there is no error - True or false result
      return resolve(result);
    });
  });
}

module.exports = {
  hash,
  compare,
};
