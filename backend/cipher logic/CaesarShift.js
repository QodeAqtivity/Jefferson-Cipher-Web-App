const regexes = require('./Regexes');

const LOWERALPHAARR = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UPPERALPHAARR = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const NUMERICARR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const caesarShiftEncryption = (unencrypted, shift) => {
    let encrypted = '';

    for (let i = 0; i < unencrypted.length; i++){
        let curr_char = unencrypted[i];
        let encrypted_curr_char = ' ';

        if (curr_char !== ' '){
            if (regexes.onlyLowerAlphaAndSpaces(curr_char)){
                let new_index = (LOWERALPHAARR.indexOf(curr_char) + parseInt(shift)) % 26;
                encrypted_curr_char = LOWERALPHAARR[new_index]; 
            } else if (regexes.onlyUpperAlphaAndSpaces(curr_char)){
                let new_index = (UPPERALPHAARR.indexOf(curr_char) + shift) % 26;
                encrypted_curr_char = UPPERALPHAARR[new_index]; 
            } else if (regexes.onlyNumeric(curr_char)){
                let new_index = (NUMERICARR.indexOf(curr_char) + shift) % 26;
                encrypted_curr_char = NUMERICARR[new_index]; 
            }
        }

        encrypted += encrypted_curr_char;
    };

    console.log(`Finished Encryption: ${encrypted}`);
    return {encrypted};
};

module.exports = {
    caesarShiftEncryption,
};
