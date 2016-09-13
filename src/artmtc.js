//@flow

module.exports = {
  add: function(x : number, y : number):number { return x + y },
  sub: function(x : number, y : number):number { return this.subtract(x,y) },
  subtract: function(x : number, y : number):number {return x - y},
  mult: function(x : number, y : number):number { return this.multiply(x, y)},
  multiply: function(x : number, y : number): number {return x*y },
  div: function(x : number, y : number): number {return this.divide(x, y) },
  divide: function(x : number, y : number): number {return x/y}
};
