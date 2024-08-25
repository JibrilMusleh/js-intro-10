// Get a random number bt 0 and 10 -> 0 inclusive and 10 exclusive

let ranNum0_9 = Math.random() * 10;

console.log(ranNum); // 
console.log(Math.floor(ranNum_9)); // 
console.log(Math.ceil(ranNum)); // 
console.log(Math.round(ranNum)); // 
console.log(Math.trunc(ranNum)); // 

// Get a random number bt 1 and 10 -> 1 inclusive and 10 inclusive
let ranNum1_10 = Math.random() * 10

console.log(Math.ceil(ranNum1_10)); // 0 and 10 both inclusive

// Get a random number between 0 and 25 -> both included
/*
RULE: You cna use below is used only when your range starts with ZERO
1. Generate a random number between 0 and 1
2. Miltiply this number with the count of desired numbers (how many numbers you can get in your range)
    largerNumber - smallerNumber + 1 => 25 - 0 + 1  => 26
3. Floor the result
*/
let ranNum0_25 =Math.floor(Math.random() * 26);

console.log((ranNum0_25));

// Get a random number between 13 and 27 -> both inclusive
/*
RULE: You can use below steps if you range doesn't start with zero.
1. Generate random number between 0 and 1
2. Miltiply this number with the count of desired numbers (how many numbers you can get in your range)
    largerNumber - smallerNumber + 1 => 27 - 13 + 1  => 15
3. Floor the result
4. Add smaller number to the floored result

Math.floor(Math.random() * (max - min + 1)) + min
*/

let ranNum13_27 = Math.floor (Math.random() * 15) + 13; // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 
                                                            // 13 14 15                     27

console.log((ranNum13_27));

// Get a random number between 943 and 1005 -> both included
let r1 = Math.floor(Math.random() * (1005 - 943 + 1)) + 943;

console.log(r1);

// Get a random number between 14 and 19 -> 14 inclusive, 19 exclusive

let r2 = Math.floor(Math.random() * (18 - 14 + 1)) + 14

console.log(r2);