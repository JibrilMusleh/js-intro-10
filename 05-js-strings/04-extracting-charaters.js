

let str = 'TechGlobal';

// Get the first character
str[0]
console.log(str[0]);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.at(0));

// Getting the last character
console.log(str[str.length - 1])
console.log(str.charAt(str.length - 1))
console.log(str.at(str.length - 1))

let city = 'Rome';

console.log(city[-1]); 
console.log(city.charAt(-1)); 
console.log(city.at(-1)); 

console.log(city[4]); 
console.log(city.charAt(4)); 
console.log(city.at(4)); 

/*
[] property access is the most used when getting characters starting from left index (0)
 [0] returns the first letter
 [1] returns the second letter

 at() method is useful when getting characters starting from left index using negative index
 at(-1) returns the last letter
 at(-2) returns the second last letter


 [] property access
  TASK: gerts a single character from the string using an index
  RETURN: returns the single character a as  as string 
    NOTE: it return undefined if the given index isn't valid for the string.
  ARGUMENTS: index
  DOES IT CHANGE: does not modify


  charAt() method
  TASK: gerts a single character from the string using an index
  RETURN: returns the single character a as  as string 
    NOTE: it return undefined if the given index isn't valid for the string.
  ARGUMENTS: index
  DOES IT CHANGE: does not modify
  STATIC OR NON-STATIC: non-static

    charCodeAt() method
  TASK: gerts a single character's Unicode - ASCII representation from the string using an index
  RETURN: returns the single character a as  as string 
    NOTE: it return NaN if the given index isn't valid for the string.
  ARGUMENTS: index
  DOES IT CHANGE: does not modify
  STATIC OR NON-STATIC: non-static

   charAt() method
  TASK: gerts a single character's Unicode - ASCII representation from the string using an index
  RETURN: returns the single character a as  as string 
    NOTE: it returns undefined if the given index isn't valid for the string.
  ARGUMENTS: index
  DOES IT CHANGE: does not modify
  STATIC OR NON-STATIC: non-static
  
*/


