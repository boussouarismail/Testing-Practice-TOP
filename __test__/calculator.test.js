const calc = require("../calculator");

describe("addition tests",()=>{

    test ("add tow numbers",() =>{
        expect(calc.add(3, 5)).toBe(8);
    });

    test ("no args",() =>{
        expect(calc.add()).toBeUndefined();
    });

    test ("one arg",() =>{
        expect(calc.add(3)).toBe(3);
    });

});

describe("substraction tests",()=>{

    test ("sub tow numbers",() =>{
        expect(calc.sub(3, 5)).toBe(-2);
    });

    test ("no args",() =>{
        expect(calc.sub()).toBeUndefined();
    });

    test ("one arg",() =>{
        expect(calc.sub(3)).toBe(3);
    });

});

describe("division tests",()=>{

    test ("div tow numbers",() =>{
        expect(calc.div(10, 5)).toBe(2);
    });

    test ("no args",() =>{
        expect(calc.div()).toBeUndefined();
    });

    test ("one arg",() =>{
        expect(calc.div(3)).toBe("must enter tow numbers");
    });

});




