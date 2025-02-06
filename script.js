function firstWord(s) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        // If we encounter a space, break the loop
        if (s[i] === ' ') {
            break;
        }
        // Otherwise, add the character to the result string
        result += s[i];
    }
    
    return result;
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
