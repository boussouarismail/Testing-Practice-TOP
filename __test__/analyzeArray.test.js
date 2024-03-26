const analyse = require("../analyzeArray.js");

describe ("Analysing an array",()=>{
    test ("test for an array", ()=>{
        expect(analyse([1,8,3,4,2,6])).toEqual({average: 4,min: 1,max: 8,length: 6});
    })

    test ("test for a longer array", ()=>{
        expect(analyse([1,8,3,4,2,6,12,67,999,0])).toEqual({average: 110.2,min: 0,max: 999,length: 10});
    })

    test ("test for an empty input", ()=>{
        expect(analyse()).toEqual();
    })

    test ("test for an empty array", ()=>{
        expect(analyse([])).toEqual();
    })
});