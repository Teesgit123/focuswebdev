console.log(performance.now())
const a = parseInt(prompt("Enter a number for a"));
const b = parseInt(prompt("Enter a number for b"));
if (isNaN(a) || isNaN(b)) {
    alert("please enter two valid numbers for a and b");
}
else {
    document.getElementById("number1").innerHTML = a;
    document.getElementById("number2").innerHTML = b;
    document.getElementById("exp1").innerHTML = `${a} / ${b} = ${a/b}`;
    document.getElementById("exp2").innerHTML = `${a} * ${b} = ${a*b}`;
    document.getElementById("exp3").innerHTML = `${a} + ${b} = ${a+b}`;
    document.getElementById("exp4").innerHTML = `${a} - ${b} = ${a-b}`;
    document.getElementById("number3").innerHTML = Math.min(a, b, a/b, a*b, a+b, a-b);
    document.getElementById("number4").innerHTML = Math.max(a, b, a/b, a*b, a+b, a-b);
}
console.log(performance.now());