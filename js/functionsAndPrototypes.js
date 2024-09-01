//Functions and prototypes.
console.log("functions and prototypes");

function Employee(name, designation, YOB){
    this.name = name;    //creating properties in the method/function Employee which is a Function Constructer.
    this.designation = designation;
    this.YOB = YOB;
}
//creating method calculateAge which is anonymous because it doesnt have a function name
Employee.prototype.calculateAge = function(){
    console.log("the current age is:-", (2024 - this.YOB));    
}
console.log(Employee.prototype);

//creating employee objects
let emp1 = new Employee('Alex', 'Developer', 1995);
console.log("Employee1 Object:-", emp1);
emp1.calculateAge();

let emp2 = new Employee('Alexander', 'Software Developer', 1992);
console.log("Employee2 Object:-", emp2);
emp2.calculateAge();

let emp3 = new Employee('Alex 2', 'Devops Developer', 1990);
console.log("Employee3 Object:-", emp3);
emp3.calculateAge();

