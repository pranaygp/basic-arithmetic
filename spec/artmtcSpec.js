var artmtc = require("./../");

describe("basic arithmetic", function(){
  it("can add", function(){
    expect(artmtc.add(1, 1)).toEqual(2);
  })
  it("can subtract",  function(){
    expect(artmtc.subtract(4, 2)).toEqual(2);
    expect(artmtc.sub(4, 2)).toEqual(2);
  })
  it("can multiply", function(){
    expect(artmtc.multiply(2, 5)).toEqual(10);
    expect(artmtc.mult(2, 5)).toEqual(10);
  })
  it("can divide", function(){
    expect(artmtc.divide(10, 5)).toEqual(2);
    expect(artmtc.div(10, 5)).toEqual(2);
  })
})
