const caesarCipher = require("../caesarCipher.js")

describe("caesarCipher", ()=>{
    test ("encripte one word",() =>{
        expect(caesarCipher("abc", 3)).toBe("def");
    }); 

    test ("encripte tow word",() =>{
        expect(caesarCipher("abc def", 3)).toBe("def ghi");
    }); 

    test ("encripte three word",() =>{
        expect(caesarCipher("abc def ghi", 3)).toBe("def ghi jkl");
    });

    test ("encripte UPER case",() =>{
        expect(caesarCipher("ABC", 3)).toBe("DEF");
    });

    test ("check punctuation",() =>{
        expect(caesarCipher("@#$%123ABC", 3)).toBe("@#$%123DEF");
    });

})