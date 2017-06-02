"use strict"
// return error in a formatted way

class Errors {
  static toJson(err) {
    var result;
    if (typeof err == "array" || typeof err == "object") {
      var convertErrors = err;
      if (err[0].param)
      {
        var convertErrors = err.map(function(errVal) {
          return errVal.msg;
        })
      }
      result = convertErrors;
    } else {
      result = [err];
    }
    return ({'errors' : result});
  }
}

module.exports = Errors;