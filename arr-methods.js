//1.Split(convert the string into an array)
//const str = "Iam fine"
//console.log(str.split(' ',2))

//2.Slice
//const arr = [1,2,3,4,5]
//console.log(arr.slice(0,5)) //arr.length-1

//3.Substring
//const str = "How are you?"
//console.log(str.substring(4,6))

//4.Reverse and join (convert array to string)
//const arr = [23,33,43,53,63]
//console.log(arr.reverse().join(' '))

//5.Shift, unshift, push and pop (used only in arrays)
//unshift
//let arr = [1,2,3,4,5]
//let output = arr.unshift(6)
//console.log(arr)

//shift
//let arr = [1,2,3,4,5]
//let output = arr.shift()
//console.log(arr)

//push
//let arr = [1,2,3,4,5]
//let output = arr.push(6)
//console.log(arr)

//pop
//let arr = [1,2,3,4,5]
//let output = arr.pop()
//console.log(arr)

//6.chatAt()
//let str = "Riyaaz"
//console.log(str.charAt(2))

//indexOf()(used only for arrays not for string)
//let arr = [1,4,5,6,7]
//console.log(arr.indexOf(5))

//lastindexOf()(it specifies the last occurence)
//let arr = [1,2,3,3,3,4,5]
//console.log(arr.lastIndexOf(3))

//7.String methods (convert a number into an string)
//const num = String(5);
//console.log(num)

//toString (another method which used to number into an string)
//const num = 25;
//console.log(num.toString())

//toFixed() (used to remove the decimals)
//const num = 25.53478
//console.log(num.toFixed(0))

//Number(used to change string to an number)
//let str = Number("500")
//console.log(str)

//parseFloat() (used to change string into an number)
//let num = "90.67845"
//console.log(parseFloat(num))

//parseInt() (used to change string into an number and removes the decimals)
//let num = "90.67845"
//console.log(parseInt(num))

//8. Math.round() (method returns a number to the nearest integer) (used only to numbers)
//let num = 12.31
//console.log(Math.round(num))

//Math.ceil() (used to round upto the nearest integer)
//let num1 = 4.1
//console.log(Math.ceil(num1))

//Math.floor() (used to round of)
//let num = 4.9
//console.log(Math.floor(num))

//Math.max() (used in array identify the largest number of an array)
//let arr = [1,4,8,9,5]
//console.log(Math.max(...arr))

//Math.min() (used in array identify the smallest number of an array)
//let arr =[1,4,8,9,5]
//console.log(Math.min(...arr))

//Math.random() (used to get any random number between 0 and 1)
//console.log(Math.floor(Math.random()))
//let max = 1000;
//let min = 100;
//let randomInteger = Math.floor(0.43410702109051447 * (max - min + 1)) + min;
//console.log(randomInteger)
//console.log(0.43410702109051447 * (max - min + 1))

//9.forEach() (use of loop the array) (does not return an array with changes)
//let arr = [4,8,0,2,6]
//arr.forEach((val, idx, curarr) => {
    //console.log(val)
    //console.log(idx, 'idx')
    //console.log(curarr)
//})

//10.filter() (used for an array and return a new array as filtered one)
//let arr =[4,3,2,5,8]
//const filtered= arr.filter((val, idx, curarr) =>{
    //return val%2 == 0
//})
//console.log(filtered)

//11.map() (used for create a array with any changes return a new array)
//let arr = [4,3,2,5,8]
//const mapped = arr.map((val, idx, curarr) =>{
    //return val * 2
//} )
//console.log(mapped)

//12.reduce() (used to convert an array into an single value and does not return an array)
//let arr = [4,3,2,5,8]
//const reduced = arr.reduce((acc, currval) =>{
//return acc + currval
//}, 0)
//console.log(reduced)