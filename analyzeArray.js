function analyzeArray(arr) {
    return  !arr ?
            undefined:
            {   average: arr.reduce((sum, num)=>sum+num,0)/arr.length,
                max: Math.max(...arr),
                min: Math.min(...arr),
                length: arr.length
            };
}

module.exports = analyzeArray;
