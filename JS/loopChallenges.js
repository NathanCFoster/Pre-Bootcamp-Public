for (let index = 0; index < 21; index++) {
    if (index % 2 == 1) {
        console.log(index);
    }   
}

for (let x = 100; x >= 0; x--) {
    if (x % 3 == 0) {
        console.log(x);
    }
}

var arr = [4,2.5,1,-0.5,-2,-3.5];
function printArray(array) {
    for (let p = 0; p < array.length; p++) {
        console.log(array[p]);
    }
}
printArray(arr);

var sum = 0;

for (let v = 0; v <= 100 ; v++) {
    sum += v;
}

console.log(sum);

var product = 1;
var temp = 0;

for (let m = 1; m <= 12; m++) {
    temp = m
    product *= temp;
}

console.log(product);