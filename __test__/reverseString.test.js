const rev = require("../reverseString.js");

test ("reversing a string",()=>{
    expect(rev("ismail")).toBe("liamsi")
})

test ("no arg",()=>{
    expect(rev()).toBeUndefined()
})

test ("empty string",()=>{
    expect(rev("")).toBe("")
})