function startWith(str, start){
    return str.substring(0, start.length).toLowerCase() === start.toLowerCase() ? true : false   
}

console.log(startWith("Bon", "bon"))