let myArr = [1,2,3,4,5];
console.log("The Array is-", myArr);
console.log("The length of array is-",myArr.length);


myArr.push(6, 7)
console.log("The Array is-", myArr);
console.log("The length of array is-",myArr.length);

let poppedListElement = myArr.pop();
console.log("poppedList is -",poppedListElement );
console.log("The Array after pop is-", myArr);
console.log("The length of array after pop is-",myArr.length);

let shiftedArrElement = myArr.shift();
console.log("Shifted Element is-", shiftedArrElement);
console.log("Array after shift-",myArr);
console.log("The length of array after Shift is-",myArr.length);

myArr.unshift(0, 1);
console.log("Array after unshift-",myArr);
console.log("The length of array after unshift` is-",myArr.length);

let secArr = [8, 9, 10]
console.log("my array after concat is-", myArr.concat(secArr));
console.log("the length of myArr is-",myArr.length);

let joinedString = myArr.join(" | ")
console.log("Joined string" + joinedString);

let slicedArr = myArr.slice(2, 6);
console.log("Sliced Array:",+ slicedArr);
console.log("Array after slice-",myArr);
console.log("The length of array after slice is-",myArr.length);

let splicedArr = myArr.splice(2, 3,"a","b","c");
console.log("Spliced Array:",+ splicedArr);
console.log("Array after slice-",myArr);
console.log("The length of array after slice is-",myArr.length);

//iterate through arrays.
console.log("For loop iteration");
for(let i=0;i,myArr.length;i++){
    console.log(myArr[i]);    
}

console.log("for each iteration");
myArr.forEach(element => console.log(element))

let mySplicedArr = myArr.splice(2, 3, 2, 3, 4)
console.log(mySplicedArr);

let squaredArrValue = myArr.map(val => val*val)
console.log("sqaured value array-", squaredArrValue);

let filteredArr = myArr.filter(num => num != 0 && num % 2 === 0);
console.log("filtered even values are-", filteredArr);

let sum = myArr.reduce((accumalator, currentval)=> accumalator + currentval, 0)
console.log("Sum-",sum);












