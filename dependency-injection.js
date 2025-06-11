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
// logPerson function is dependent on shoaibali object because object is created inside the function
function logPerson() {
  var shoaibali = new Person("Shoaib", "Ali"); // 
  console.log(shoaibali);
}

logPerson();
