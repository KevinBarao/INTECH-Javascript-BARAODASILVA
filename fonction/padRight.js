function padRight(char, str, quantity) {
    let tpr = ""
    const finalQuantity = quantity - str.length
    for(let i = 0; i < finalQuantity; i++) {
        tpr += char
        if(i === finalQuantity-1) {
            str += tpr
            return str
        }
    }
}

const padZeros = padRight.bind(null, "0");
const padSpaces = padRight.bind(null, " ")

console.log(padRight(".", "11011", 8))
console.log(padZeros("11011", 8))
console.log(padSpaces("11011", 8))