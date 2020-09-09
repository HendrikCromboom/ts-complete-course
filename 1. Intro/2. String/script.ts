function add(n1:number, n2:number){
    return n1+n2;
}
const number1 = "7.1"
const number2 = "8.9"

const result:string = add(parseFloat(number1), parseFloat(number2)).toString()
document.getElementById("target").innerHTML= result

