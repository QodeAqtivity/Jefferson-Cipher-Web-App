const ALPHANUMERICWHEEL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


const getUnencryptedIndex = (num_char) => {
    return Math.floor(Math.random() * (num_char-1));
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

const randomWheelOrder = (length) => {
    let order = [];

    for (let i = 0; i < length; i++) {
        order.push(i);
    }

    order = shuffle(order);

    return order;
}


export const randomGenerateWheelSet = (unencrypted) => {
    // console.log(`The unencrypted value is: ${unencrypted}`);

    let wheelSet = [];

    let unencryptedIndex = getUnencryptedIndex(26);

    for (let i = 0; i < unencrypted.length; i++){
        let wheel = randomFill(unencrypted[i], unencryptedIndex);
        wheelSet.push(wheel);
    }
    
    console.log("Wheel Set is: ");
    console.log(wheelSet);
    
    let worder = randomWheelOrder(unencrypted.length);
    console.log(`Random Wheel Order: ${worder}`)
}

