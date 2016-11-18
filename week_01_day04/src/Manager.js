var Employee = require('./Employee.js');

var Manager = function(firstName,lastName,title,id){
  this.employees = [];
  Employee.call(this, firstName, lastName, title, id);
}

Manager.prototype.addEmployee = function (employee) {
  if(this.employees.length > 0){
    for(var i = 0; i < this.employees.length; i++){
      if(this.employees[i].id === employee.id){
        return;
      }

    }
  }

  this.employees.push(employee);

};

module.exports = Manager;
