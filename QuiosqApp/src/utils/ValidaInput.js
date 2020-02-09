module.exports = {
    minLength: (input_text) => {
        if(input_text.length >= 3) return true;
        return false;
    },
    equals: (input_a, input_b) =>{
        if(input_a == input_b) return true;
        return false;
    },
    checkForm: (array) => {
        return array.map((input) => {
            if(input < 4) return false;
        })
    },
}