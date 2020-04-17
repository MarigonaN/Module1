/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the 
rectangle.
*/

const rectangleArea= function(l1,l2){
    const area = l1*l2;
    return area;
}
resultarea=rectangleArea(2,4);
console.log(resultarea);





/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, 
then
 returns triple their sum.
// */

const crazySum = (x1,x2) => {
    if (x1 === x2){
        sum = (x1+x2)*3;
    }else{
        sum = x1 + x2;
    }
    return sum;
}
let CrazySum2 = crazySum(4,4);
console.log(CrazySum2);







/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
 const crazyDiff = (n) =>{
 if (n<19) {
     return (19-n);
 }else{
     return (n-19)*3;
 }
}
console.log(crazyDiff(10));
console.log(crazyDiff(19));
console.log(crazyDiff(24));




/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 
(included) or equal to 400.
*/

function boundary (n) {
        
    if (n >= 20 && n <= 100 || n === 400){
    return true
    } else {
        return false
    }
}
console.log(boundary(100));


/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S 
"Strive" in front of a given string, if the given string begins with "Strive" 
then return the original string.
*/


function strivify(S){
    arr = S.split(" ");
    if (arr[0]=="Strive"){
        return S;
    }else{
        return false;
    }
}
console.log(strivify("Strive"));
console.log(strivify("Ttrive"));





/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is 
a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (num)
 {
    if (num % 3 == 0) {
    return "It is a multiple of 3";
    }
    else if (num % 7 == 0) {
            return "It is a multiple of 7";
    } else {
            return "It's not  a multiple of 3 or 7";
    }
}

        console.log(check3and7(6));
        console.log(check3and7(14));
        console.log(check3and7(9));
        console.log(check3and7(5));

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/


let reverseString =function(str) {
    return str.split("").reverse().join("");
}
let str2=reverseString("Strive");
console.log("Reversed: ", str2);





/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number 
n and returns an array containing n random numbers between 0 and 10
*/

function giveMeRandom(myNum) {
                
    for (var i = 0; i < 11; i++) {
    var randomNum = Math.floor(Math.random() * myNum) /*This function accepts a single 
                                                      parameter value which is number 
                                                     to be rounded to its nearest integer 
                                                     in downward rounding method.*/
    return randomNum;
    }
}
console.log(giveMeRandom(12));



