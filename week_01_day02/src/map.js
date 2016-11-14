Array.prototype.myMap = function(callback){
  var result = [];

  for(var i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }

  return result;
}

// module.exports = Array.prototype.myMap();
