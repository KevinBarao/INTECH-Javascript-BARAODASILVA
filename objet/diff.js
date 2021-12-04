function diff(source, propertyNames) {
    let newObj = source
    for([key, value] in propertyNames) {
        source.hasOwnProperty(key) ? delete newObj[key] : null;
    }
    return newObj;
}

let o1 = { r: 0, g: 0, b: 0, a: 0 };
let withoutOpacity = { a: null };
let newObj = diff(o1, withoutOpacity)
console.log(newObj)