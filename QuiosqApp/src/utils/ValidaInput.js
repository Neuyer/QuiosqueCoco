module.exports = {
    minLength: (input_text) => {
        if(input_text.length >= 4) return true;
        return false;
    },
    equals: (input_a, input_b) =>{
        if(input_a == input_b) return true;
        return false;
    },
}