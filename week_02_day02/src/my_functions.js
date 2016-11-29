var myFunction = function(condition, expensiveFunction){

  var result = null;

  if(condition){
    result = expensiveFunction();
  }

  return result;

}

module.exports = myFunction;
