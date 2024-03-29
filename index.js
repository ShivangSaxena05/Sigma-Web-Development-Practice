let a = prompt("Enter first number")
let b = prompt("Enter second number")
sum = parseInt(a)+parseInt(b)
// if(isNaN(a)|| isNaN(b)){
//     throw SyntaxError("Sorry this is not a number")
// }
try{   
    console.log(sum)
}catch(NaN){
    console.log("error is there")
}finally{
    console.log("FFiles are closed and db connection is being closed")
}