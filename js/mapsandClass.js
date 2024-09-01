var myMap = new Map();
myMap.set("firstname","Pooja");
myMap.set("lastname","Mother");
myMap.set("age",30);
myMap.set("father","B R Wadrali");
myMap.set("mother","Anita");

console.log("My Map:-", myMap);
console.log("firstname",myMap.get("firstname"));
console.log("lastname",myMap.get("lastname"));
console.log("age",myMap.get("age"));
console.log("father",myMap.get("father"));
console.log("mother",myMap.get("mother"));

//class
class Employee{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    details(){
        console.log(this.id," ",this.name)
    }
    
}
var e1 = new Employee(101, "xxx")
var e2 = new Employee(102, "yyy")
e1.details();
e2.details();