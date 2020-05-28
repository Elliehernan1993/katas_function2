function add(x, y) {
    return x + y;
};

if (add(1,2) == 1 + 2) {
    console.log("Test Passed");
}

if (add(0,2) == 0 + 2) {
    console.log("Test Passed");
}

function multiply(x, y) {
    return x * y;
};

if (multiply(1,2) == 1 * 2) {
    console.log("Test Passed");
}
if (multiply(0,2) == 0 * 2) {
    console.log("Test Passed");
}

function power(x, n) {
    let pow = 1;
    for(let i = 0; i < n; i++) {
        pow = multiply(pow, x);
    }
    return pow;
};

function factorial(n) {
    let fact = n;
    for(let i = n; i > 1; i--) {
        fact = fact * (i-1);
    }
    return fact;
}

if (factorial(5) == 5 * 4 * 3 * 2 * 1) {
    console.log("Test Passed");
}