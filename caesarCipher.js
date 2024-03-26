function caesarCipher (str, fact){//need emprovment
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).charCodeAt() >= 65 && str.charAt(i).charCodeAt()<= 122) {
            arr.push(String.fromCharCode(str.charCodeAt(i)+fact));
        }else{
            arr.push(str.charAt(i));
        }           
        
    }
    return arr.join("");
}

module.exports = caesarCipher;