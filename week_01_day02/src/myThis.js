var myGlobalThis = function(){
  return this;
}
var myUndefinedThis = function(){
  'use strict';
  return this;
}

module.exports = {
  myGlobalThis : myGlobalThis,
  myUndefinedThis: myUndefinedThis
};
