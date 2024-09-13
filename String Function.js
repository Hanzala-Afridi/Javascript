let str = "This is a Hanzala"
// First occurence of substrinf
let position = str.indexOf("is");
console.log(position);
//console.log(str);

// lastt occurence of substrinf
position = str.lastIndexOf("is");
console.log(position);


//substring from a string
let substring = str.slice(3,6);
console.log(substring);

substring = str.substring(3,6);
console.log(substring);


substring = str.substr(3,6);
console.log(substring);

//let replaced = str.replace ('str','Pathan');
//console.log(str)
//console.log(replaced)


console.log(str.toUpperCase());
console.log(str.toLowerCase());

let newstring = str.concat(":::this is New string");
console.log(newstring);



let strwithwhitespace = 'this is        a       hanzala     afridi';
console.log(strwithwhitespace);
console.log(strwithwhitespace.trim());

//let char2 = str.charAt(2);
//console.log(char2);


let char2 = str.charCodeAt(2);
console.log(char2);


console.log(str[3]);










