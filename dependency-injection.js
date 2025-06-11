class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
/* or 
var Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};
*/
// logPerson function 
function logPerson(p) {
  console.log(p);
}

var shoaibali = new Person("Shoaib", "Ali"); 


// sending object into a function is a Dependency Injection
logPerson(shoaibali);
