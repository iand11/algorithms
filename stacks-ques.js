// Stack
//  - last item in will be first out
//  - like and array (all you can do is push and pop)
//

var Stack = function() {
  this.storage = '';
};

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat('***', val);
  return this.storage;
};

Stack.prototype.pop = function(val) {
  var str = this.storage.slice(this.storage.lastIndexOf('***') + 3);
  this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
  return str;
};

// Queues
// -  first item in is first item out
