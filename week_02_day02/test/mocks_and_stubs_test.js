var expect = require('chai').expect;
const sinon = require('sinon');
var myFunction = require('../src/my_functions');
describe('Stubs', () => {
  it('should use stub', () => {
    const stub = sinon.stub();

    stub('hello');

    console.log(stub.firstCall.args);
  });
});

describe('Stubs', () => {
  it('should use stubs', () => {
    const stub = sinon.stub().returns(42);

    const result = stub('hello');

    expect(result).to.equal(42);
  })
});

describe('myFunction', () => {
  it('should return result of expensiveFunction call', () => {
    const stub = sinon.stub().returns(42);

    const result = myFunction(true, stub);

    expect(result).to.equal(42);
  });
});
