Array.prototype.myMap = function(callback){
  var result = [];

  for(var i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }

  return result;
}

Array.prototype.myEvery = function (callback) {

  for(var i = 0; i < this.length; i++){
      if(!callback(this[i])){
        return false;
      }
  }
  
  return true;
};
