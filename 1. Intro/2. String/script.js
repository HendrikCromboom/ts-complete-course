function add(n1, n2) {
    return n1 + n2;
}
var number1 = "7.1";
var number2 = "8.9";
var result = add(parseFloat(number1), parseFloat(number2)).toString();
document.getElementById("target").innerHTML = result;
