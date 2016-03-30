module.exports = {
  add: function(x, y) { return x + y },
  sub: function(x, y) { return this.subtract(x,y) },
  subtract: function(x, y) {return x - y},
  mult: function(x, y) { return this.multiply(x, y)},
  multiply: function(x, y) {return x*y },
  div: function(x, y) {return this.divide(x, y) },
  divide: function(x, y) {return x/y}
};

export default module.exports;
