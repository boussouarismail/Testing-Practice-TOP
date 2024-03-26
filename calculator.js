const calculator = {
    add :(a, b)=>{
        return a && b ? a+b : a ? a : undefined;
    },
    sub :(a, b)=>{
        return a && b ? a-b : a ? a : undefined;
    },
    div :(a, b)=>{
        return a && b ? a/b : a ? "must enter tow numbers" : undefined;
    },
    
}

module.exports = calculator;