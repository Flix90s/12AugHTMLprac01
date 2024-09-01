//2-D Array
// int [][] myNumber = 
let myNumbers = [[1,2,3,4,5],[6, 7, 8, 9, 10],[11, 12, 13, 14, 15]]
console.log("the length-",myNumbers.length);
console.log("the array");
console.log(myNumbers);

myNumbers.forEach(ele => console.log("ele-", ele))

for(let i=0; i<myNumbers.length; i++){
    console.log("index is-", i, "- the content in index is -",myNumbers[i]);    
}