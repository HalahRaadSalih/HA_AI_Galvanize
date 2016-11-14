var expect = require('chai').expect;
var app = require('../src/app.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).to.equal(-1);
    });
  });
});

describe('Item not in Array', function(){
  it('should return item value that exits in A but not in B', function(){
    expect(app.missingItem([1,2,3],[1,2])).to.equal(3);
    expect(app.missingItem([1,2,5],[1,2])).to.equal(5);

  });
});
