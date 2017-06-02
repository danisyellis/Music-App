"use strict"
// return error in a formatted way

class Errors {
  static toJson(err) {
    var result;
    if (typeof err == "array" || typeof err == "object") {
      result = err;
    } else {
      result = {'errors' : [err]}
    }
    return (result);
  }
}

module.exports = Errors;