var expect = require('chai').expect;
var app = require('../src/app.js');
var myThis = require('../src/myThis.js');

require('../src/map.js');

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

describe('implement the map function for arrays', function(){
  it('should square array items', function(){
    expect([1,2,3].myMap(function(item){
      return item * item;
    })).to.deep.equal([1,4,9]);
  });
});

describe('implement the every function for arrays', function(){
  it('should return boolean value after running a function', function(){
    expect([1,2,6].myEvery(function(item){
      return item > 5;
    })).to.equal(false);
    expect([7,9,6].myEvery(function(item){
      return item > 5;
    })).to.equal(true);
    expect([7,8,5].myEvery(function(item){
      return item > 5;
    })).to.equal(false);
  });
});

describe('this', function(){
  it('should refer to global object when used in functions', function(){
    expect(myThis()).to.equal(global);
  });
})
