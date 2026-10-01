let primeNumbers = [];
let primeCount =0

for (let i = 2; i <= 100; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 2) { // only divisible by 1 and itself
        primeNumbers.push(i);
        primeCount++;
    }
}

console.log("Prime numbers are:", primeNumbers);
console.log("Total Prime numbers are:", primeCount);
