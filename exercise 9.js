let ran = Math.random()
let a = prompt("Enter a no. : ")
let obj = prompt("Enter operation : ")
let b = prompt("Enter a no. : ")
let oper = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
alert("Its a faulty calculator")
if(ran>0.1){
    alert(`The calculation is ${eval (`${a} ${obj} ${b}`)}`)
}
else{
    obj=oper[obj]
    alert(`The calculation is ${eval (`${a} ${obj} ${b}`)}`)
}
