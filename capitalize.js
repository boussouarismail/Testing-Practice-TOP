function capitalize(str){
    
    return str ? str[0].toUpperCase() + str.slice(1) : str == "" ? "" : undefined;
}

module.exports = capitalize;