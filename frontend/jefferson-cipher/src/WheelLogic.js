const ALPHANUMERICWHEEL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];


const getUnencryptedIndex = (num_char) => {
    return Math.floor(Math.random() * (num_char));
    // console.log()
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

const randomFill = (currChar, unencryptedIndex) => {
    let wheel = [...ALPHANUMERICWHEEL]; //shallow copy (lodash??)

    wheel = shuffle(wheel);

    let wrongIndex = wheel.indexOf(currChar);
    console.log(`Wrong index: ${wrongIndex}`);

    let wrongChar = wheel[unencryptedIndex];

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


export const randomGenerateWheelSet = (unencrypted) => {
    // console.log(`The unencrypted value is: ${unencrypted}`);
    let messageLength = unencrypted.length;

    let wheelSet = [];

    let solutionIndex = getUnencryptedIndex(37);

    let solutionCombo = randomWheelCombo(messageLength);

    for (let i = 0; i < messageLength; i++){
        let wheel = {
            order: randomFill(unencrypted[i], solutionIndex),
            id: solutionCombo[i],
        };
        wheelSet.push(wheel);
    }
    
    console.log("Wheel Set is: ");
    console.log(wheelSet);
    
    let deliveryCombo = randomWheelCombo(messageLength);
    while (JSON.stringify(deliveryCombo) === JSON.stringify(solutionCombo)){
        deliveryCombo = randomWheelCombo(messageLength);
    }

    console.log(`Solution Combo: ${solutionCombo}`);
    console.log(`Delivery Combo: ${deliveryCombo}`);
    
    return {
        wheelSet: JSON.stringify(wheelSet),
        solutionCombo: solutionCombo.toString(),
        deliveryCombo: deliveryCombo.toString(),
    }
}

export const onlyAlphaNumericAndSpaces = (unencrypted) => {
    let regex = /^[0-9A-Za-z\s]+$/;
    return regex.test(unencrypted);
}
