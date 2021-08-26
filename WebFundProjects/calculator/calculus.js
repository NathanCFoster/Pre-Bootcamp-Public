var numString = "";
var equation = [];

function press(num) {
    var dis = document.getElementById("display");
    numString += num;
    console.log(numString);
    dis.innerText = numString;
}

function setOP(op) {
    var dis = document.getElementById("display");
    equation.push(numString);
    equation.push(op);
    console.log(equation);
    numString = "";
    dis.innerText = numString + equation;
}

function calculate() {
    var dis = document.getElementById("display");
    equation.push(numString)
    var joinedEq = equation.join("");
    console.log(joinedEq);
    console.log(eval(joinedEq));
    dis.innerText = eval(joinedEq);
}