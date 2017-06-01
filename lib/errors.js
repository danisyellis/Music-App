"use strict"
// return error in a formatted way

class Errors {
  static toJson(err) {
    return ({'error' : err});
  }
}

module.exports = Errors;