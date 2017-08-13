function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.oldAge = function() {
  this.age++;
  return this.age;
};

Person.prototype.ageQuick = function() {
  while (this.age < 100) {
    this.oldAge();
  }
};

var ian = new Person('ian', 'driscoll', 31);
var ali = new Person('ali', 'seders', 31);

ian.ageQuick();
