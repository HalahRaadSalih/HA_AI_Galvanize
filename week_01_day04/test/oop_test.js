var expect = require('chai').expect;
var Employee = require('../src/Employee.js');
var Manager = require('../src/Manager.js');

describe('OOP with javascript', function(){
  it('should create an instance of employee', function(){
    expect(new Employee()).to.deep.equal(new Employee());

  });

  it('should create an instance of employee with first and last name, title and id fields',function(){
    expect(new Employee('Halah', 'Al-Shaikhly', 'Enterprise Instructor', '12345678')).to.deep.equal({
      firstName: 'Halah',
      lastName: 'Al-Shaikhly',
      title: 'Enterprise Instructor',
      id:'12345678'
    });
  });

  it('should create an instance of employee with first and last name, title and id fields',function(){
    expect(new Employee('Halah', 'Al-Shaikhly', 'Enterprise Instructor', '12345678')).to.deep.equal({
      firstName: 'Halah',
      lastName: 'Al-Shaikhly',
      title: 'Enterprise Instructor',
      id:'12345678'
    });
  });

  it('should create an instance of manager with first and last name, title and id fields',function(){
    expect(new Manager('Jerimy', 'Hiltner', 'Partner Relation Manager','12345678')).to.be.an.instanceof(Manager);
  });

  it('should create manager with a list of employee that report to manager', function(){
    var manager = new Manager('Jerimy', 'Hiltner', 'Partner Relation Manager','12345678');
    expect(manager).to.have.property('employees');
  });
});
