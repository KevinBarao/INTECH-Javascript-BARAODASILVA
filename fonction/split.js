function split(str, sep) {
    let finalSplit = []
    let firstIndex = 0

    for(let i = 0;i < str.length; i++) {
        console.log(str.substring(i, i+sep.length))
        if(str.substring(i, i+sep.length) === sep) {
            tprWord = str.substring(firstIndex, i)
            finalSplit.push(tprWord)
            firstIndex = i+sep.length
        }
    }
    return finalSplit;
}

console.log(split("I'm reading a wooden book.", "oo"));
