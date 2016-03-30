"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = {
  add: function add(x, y) {
    return x + y;
  },
  sub: function sub(x, y) {
    return this.subtract(x, y);
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  mult: function mult(x, y) {
    return this.multiply(x, y);
  },
  multiply: function multiply(x, y) {
    return x * y;
  },
  div: function div(x, y) {
    return this.divide(x, y);
  },
  divide: function divide(x, y) {
    return x / y;
  }
};

exports.default = module.exports;