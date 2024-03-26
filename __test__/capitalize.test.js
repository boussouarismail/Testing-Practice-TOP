const cap = require("../capitalize.js");

test ("make the first letter capitale", ()=>{
    expect(cap("ismail")).toBe("Ismail");
});

test ("in case of no arg", ()=>{
    expect(cap()).toBeUndefined();
});

test ("in case of AN EMPTY str", ()=>{
    expect(cap("")).toBe("");
});