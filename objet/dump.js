function dump(obj) {
    let text = "{"
    for(let [key, value] of Object.entries(obj)) {
         switch(typeof value){
             case "string" : text += `${key}:"${value}",`;
             break;
             case "object" : text += `${key}:[${value}],`;
             break;
         }
    }
    return text.slice(0, -1) + "}";
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
console.log(dump(obj)); // => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}
