//Encapsulation

function Animal(val){
  var name = val;
  var publicApi = {
      setName: function (val){
          name = val;
      },
      getName: function (){
          return name;
      }
  }
  
  return publicApi;
}
var animal = new Animal("Dog");
animal.setName("Cat");
console.log(animal.getName());   
console.log(animal.name);  


//inheritance
class Person{
  constructor(name){
      this.name = name;
  }
  sayName(){
      console.log(this.name);
  }
}
class Student extends Person{
  constructor(name, rollNumber){
      super(name);
      this.rollNumber = rollNumber;
  }
  Full(){
      console.log(`Name: ${this.name}, Roll number: ${this.rollNumber}`)
  }
}
var student = new Student("Emma", 1);
  
student.sayName();  
console.log(student.Full());