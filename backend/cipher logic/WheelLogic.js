// const ALPHANUMERICWHEEL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];
// import * as wheelbases from './WheelBase';
const wheelbases = require('./WheelBase');

const getUnencryptedIndex = (num_char) => {
    return Math.floor(Math.random() * (num_char));
    // console.log()
}

const getEncryptedIndex = (num_char, unencrypted_index) => {
    let encrypted_index = getUnencryptedIndex(num_char);
    if (encrypted_index === unencrypted_index){
        encrypted_index++
    }

    return encrypted_index;
} 

// Fisher-Yates Unbiased Shuffle from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?page=1&tab=scoredesc#tab-top
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const randomFill = (currChar, unencryptedIndex, wheelbase) => {
    let wheel = [...wheelbase]; //shallow copy (lodash??)

    wheel = shuffle(wheel);

    let wrongIndex = wheel.indexOf(currChar);  //position of currChar from initial scramble
    console.log(`Wrong index: ${wrongIndex}`);

    let wrongChar = wheel[unencryptedIndex];  //the character in the unencrypted index from initial scramble

    //Swap
    wheel[unencryptedIndex] = currChar;
    wheel[wrongIndex] = wrongChar;

    console.log(`unencrypted current character: ${currChar} @ index: ${unencryptedIndex}`);
    // console.log("Wheel:");
    console.log(wheel);
    return wheel;
}

const randomWheelCombo = (length) => {
    let combo = [];

    for (let i = 0; i < length; i++) {
        combo.push(i);
    }

    return shuffle(combo);

}


const randomGenerateWheelSet = (unencrypted) => {
    // console.log(`The unencrypted value is: ${unencrypted}`);
    let messageLength = unencrypted.length;

    let wheelSet = [];

    const solutionIndex = getUnencryptedIndex(wheelbases.LOWERALPHANUMERICWHEEL.length);
    const encryptedIndex = getEncryptedIndex(wheelbases.LOWERALPHANUMERICWHEEL.length, solutionIndex);

    const solutionCombo = randomWheelCombo(messageLength);

    let encryptedArr = [];

    for (let i = 0; i < messageLength; i++){
        let wheel = {
            order: randomFill(unencrypted[i], solutionIndex, wheelbases.LOWERALPHANUMERICWHEEL), //order of the current wheel
            id: solutionCombo[i], //the index of the solution/unencrypted character
        };
        wheelSet.push(wheel);
        encryptedArr.push(wheel.order[encryptedIndex]);
        console.log('encrypted arr is: ', encryptedArr);
    }
    
    console.log("Wheel Set is: ");
    console.log(wheelSet);
    
    let deliveryCombo = randomWheelCombo(messageLength);

    // this should almost never run
    while (JSON.stringify(deliveryCombo) === JSON.stringify(solutionCombo)){
        deliveryCombo = randomWheelCombo(messageLength);
    }

    console.log(`Solution Combo: ${solutionCombo}`);
    console.log(`Delivery Combo: ${deliveryCombo}`);
    
    return {
        encrypted: encryptedArr.toString(),
        solutionCombo: solutionCombo.toString(),
        deliveryCombo: deliveryCombo.toString(),
        wheelSet: JSON.stringify(wheelSet),
    }
}

const onlyAlphaNumericAndSpaces = (unencrypted) => {
    let regex = /^[0-9A-Za-z\s]+$/;
    return regex.test(unencrypted);
}

module.exports = { randomGenerateWheelSet,
                   onlyAlphaNumericAndSpaces,
                 }           