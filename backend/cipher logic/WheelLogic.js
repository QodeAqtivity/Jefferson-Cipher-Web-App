const wheelbases = require('./WheelBase');

const getUnencryptedIndex = (num_char) => {
    return Math.floor(Math.random() * (num_char));
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

    let wrongChar = wheel[unencryptedIndex];  //the character in the unencrypted index from initial scramble

    //Swap
    wheel[unencryptedIndex] = currChar;
    wheel[wrongIndex] = wrongChar;

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
    let messageLength = unencrypted.length;

    let wheelSet = [];

    const solutionIndex = getUnencryptedIndex(wheelbases.LOWERALPHANUMERICWHEEL.length);
    const encryptedIndex = getEncryptedIndex(wheelbases.LOWERALPHANUMERICWHEEL.length, solutionIndex);
    let solutionCombo = randomWheelCombo(messageLength);
    // const solutionCombo = randomWheelCombo(messageLength);
    let deliveryCombo = []
    // this should almost never run
    // while (JSON.stringify(deliveryCombo) === JSON.stringify(solutionCombo)){
    //     deliveryCombo = randomWheelCombo(messageLength);
    // }

    let encryptedArr = [];

    for (let i = 0; i < messageLength; i++){
        let wheel = {
            order: randomFill(unencrypted[i], solutionIndex, wheelbases.LOWERALPHANUMERICWHEEL), //order of the current wheel
            id: solutionCombo[i], //the index of the solution/unencrypted character
        };
        wheelSet.push(wheel);
        // the wheelSet is in the solutionCombo order and you will be able to see the message by scanning for it going down the rows
        // encryptedArr.push(wheel.order[encryptedIndex]);
    }

    wheelSet = shuffle(wheelSet);

    for (let i = 0; i < messageLength; i++){
        deliveryCombo.push(wheelSet[i].id);
        encryptedArr.push(wheelSet[i].order[encryptedIndex]);
    }
    // wheelSet.map((wheel) => {deliveryCombo.push(wheel.id)});

    // console.log(`deliverycombo is: ${deliveryCombo}`)
    
    // let solutionCombo = [...deliveryCombo];


    // for (let i = 0; i < deliveryCombo.length; i++){
    //     console.log(`wheel num is: ${deliveryCombo[i]}`)
    //     console.log(`curr char ${unencrypted[deliveryCombo[i]]}`)
    //     let wheel = {
    //         order: randomFill(unencrypted[deliveryCombo[i]], solutionIndex, wheelbases.LOWERALPHANUMERICWHEEL),
    //         id: deliveryCombo[i],
    //     }
    //     wheelSet.push(wheel)
    //     encryptedArr.push(wheel.order[encryptedIndex]);
    //     solutionCombo[i] = unencrypted.indexOf(unencrypted[deliveryCombo[i]])
    // }

    console.log(solutionIndex)
    
    return {
        encrypted: encryptedArr.toString(),
        solutionCombo: solutionCombo.toString(),
        deliveryCombo: deliveryCombo.toString(),
        wheelSet: wheelSet,
    }
}

const onlyAlphaNumericAndSpaces = (unencrypted) => {
    let regex = /^[0-9A-Za-z\s]+$/;
    return regex.test(unencrypted);
}

module.exports = { randomGenerateWheelSet,
                   onlyAlphaNumericAndSpaces,
                 }           