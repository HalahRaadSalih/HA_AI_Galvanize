var Employee = require('./Employee.js');

var Manager = function(firstName,lastName,title,id){
  this.employees = [];
  Employee.call(this, firstName, lastName, title, id);
}

module.exports = Manager;
