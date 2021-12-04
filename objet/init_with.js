function initWith(size, f) {
    let tab = [];
    for(let i = 0; i < size; i++) { 
        tab.push(f(i))
    }
    return tab;
}

const withZero = () => 0;
const fromZero = index => index;
const from42 = index => 42 + index;

console.log(initWith(5, withZero)); // => [0, 0, 0, 0, 0]
console.log(initWith(5, fromZero)); // => [0, 1, 2, 3, 4]
console.log(initWith(5, from42)); // => [42, 43, 44, 45, 46]