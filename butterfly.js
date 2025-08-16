
function butterflyPattern(n){



for (let i = 1; i <= n; i++) {
    let row = "";

    
    for (let j = 1; j <= i; j++) {
        row += (j === 1 || j === i) ? "* " : "  ";
    }

  
    row += "  ".repeat(2 * (n - i));

    
    for (let j = 1; j <= i; j++) {
        row += (j === 1 || j === i) ? "* " : "  ";
    }

    console.log(row);
}


for (let i = n; i >= 1; i--) {
    let row = "";

    
    for (let j = 1; j <= i; j++) {
        row += (j === 1 || j === i) ? "* " : "  ";
    }

    row += "  ".repeat(2 * (n - i));

    for (let j = 1; j <= i; j++) {
        row += (j === 1 || j === i) ? "* " : "  ";
    }

    console.log(row);
}
}
butterflyPattern(4)
