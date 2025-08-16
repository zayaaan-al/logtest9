const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the desired digit sum (S): ', (sInput) => {
    let S = parseInt(sInput);
    rl.question('Enter the divisor (D): ', (dInput) => {
        let D = parseInt(dInput);
        if (S < 1 || S > 9 * D || D < 1) {
            console.log("No such number exists.");
        } else {
            let max_sum_last = 9 * (D - 1);
            let first_digit = Math.max(1, S - max_sum_last);
            if (first_digit > 9) {
                console.log("No such number exists.");
            } else {
                let remaining = S - first_digit;
                let digits = new Array(D).fill(0);
                digits[0] = first_digit;
                let pos = D - 1;
                while (remaining > 0) {
                    let add = Math.min(9, remaining);
                    digits[pos] = add;
                    remaining -= add;
                    pos -= 1;
                }
                let num = digits.join('');
                console.log(`Smallest number with digit sum ${S} and divisible by ${D} is : ${num}`);
            }
        }
        rl.close();
    });
});