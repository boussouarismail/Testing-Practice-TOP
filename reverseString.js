function reverseString (str){

    return str ? str.split("").reverse().join(""): str == "" ? "" : undefined;
}


module.exports = reverseString;