var missingItem = function(a,b){
  var item;

  for(var i = 0; i < a.length;i++){
    if(b.indexOf(a[i]) === -1){
      item = a[i];
    }
  }
  return item;
}

module.exports = {
  missingItem: missingItem
}
