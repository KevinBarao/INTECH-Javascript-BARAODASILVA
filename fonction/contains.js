function contains(haystack, needle, startIndex = 0) {   
    for(let i = startIndex; i <= haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) == needle) {
            return i;
        }
    }
    return -1;
}

console.log(contains("bonsoir test", "tes", 0));
console.log(contains("bonsoir", "tes", 0));
console.log(contains("bonsoir test", "tes"));
console.log(contains("bonsoir test", "tes", 9));


