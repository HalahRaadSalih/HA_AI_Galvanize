var expect = require('chai').expect;
var Employee = require('../src/Employee.js');

describe('OOP with javascript', function(){
  it('should create an instance of employee', function(){
    expect(new Employee()).to.deep.equal(new Employee());

  });

  it('should create an instance of employee with first and last name, title and id fields',function(){
    expect(new Employee('Halah', 'Al-Shaikhly', 'Enterprise Instructor', '12345678')).to.deep.equal({
      firsName: 'Halah',
      lastName: 'Al-Shaikhly',
      title: 'Enterprise Instructor',
      id:'12345678'
    });
  });
});
