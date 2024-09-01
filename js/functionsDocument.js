//Fuction calling.
console.log("The Function calling--");
function add(a, b){
    return a + b;
}
var result = add.call(this, 14, 16);
console.log("The result is:-", result)
console.log("-------------------------------------------------------------------------------");
//Function Object.
console.log("Type of function.");
function message(){
    console.log("Greeting from Pooja!.");    
}
console.log("typeof :-",typeof message);
console.log("-------------------------------------------------------------------------------");
//Passing functions as arguments:
console.log("Passing functions as arguments:");
function function1(x){
    console.log(x);
}
function function2(var1, callback){
    callback(var1)
}
function2(2, function1);
console.log("-------------------------------------------------------------------------------");
//Function returning function.
console.log("Function returning function:-");
function sqr(){
    return function cal(x){
        return x * x;
    }
}
var ans = sqr();
ans(5);
console.log("The Answer:-", ans(5));
console.log("-------------------------------------------------------------------------------");


