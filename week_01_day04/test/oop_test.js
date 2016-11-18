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

describe('Manager Constructor', function(){
  var manager = new Manager('Jerimy', 'Hiltner', 'Partner Relation Manager','12345678');
  var halah = new Employee('Halah', 'Al-Shaikhly', 'Enterprise Instructor', '12345678');

  it('should have add employees method', function(){
    expect(manager).to.respondsTo('addEmployee');
  });

  it('should have a list of employees that report to a manager', function(){
    manager.addEmployee(halah);
    expect(manager.employees).to.deep.equal([{
      firstName: 'Halah',
      lastName: 'Al-Shaikhly',
      title: 'Enterprise Instructor',
      id:'12345678'}]);
  });

  it('should have a unique list of employees that report to manager', function(){
    manager.addEmployee(halah);
    manager.addEmployee(halah);
    manager.addEmployee(halah);

    var sarah = new Employee('Sarah', 'Al-Shanmy', 'German Language Instructor','01234t646');
    manager.addEmployee(sarah);

    console.log(manager.employees);

    expect(manager.employees).to.deep.equal([
      {
        firstName: 'Halah',
        lastName: 'Al-Shaikhly',
        title: 'Enterprise Instructor',
        id:'12345678'},
        {
          firstName: 'Sarah',
          lastName: 'Al-Shanmy',
          title: 'German Language Instructor',
          id:'01234t646'}
        ]);
  });

});
