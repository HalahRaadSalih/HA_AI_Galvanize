var expect = require('chai').expect;
const sinon = require('sinon');

describe('Stubs', () => {
  it('should use stub', () => {
    const stub = sinon.stub();

    stub('hello');

    console.log(stub.firstCall.args);
  });
});
