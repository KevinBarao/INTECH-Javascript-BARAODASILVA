function padLeft(char, str, quantity) {
    let tpr = "";
    let finalQuantity = str != null ? quantity - str.length : 0

    if( finalQuantity != 0 ) {
        for(let i = 0; i < finalQuantity; i++) {
            tpr += char
            if(i === finalQuantity-1) {
                tpr += str
                return tpr
            }
        }
    }
}

const padZeros = padLeft.bind(null, "0");
const padSpaces = padLeft.bind(null, " ")

console.log(padLeft(0, "11011", 8))
console.log(padZeros("11011", 8))
console.log(padSpaces("11011", 8))