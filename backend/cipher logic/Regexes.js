const LOWERALPHAREGIX = /^[a-z\s]+$/;
const UPPERALPHAREGIX = /^[A-Z\s]+$/;
const NUMERICREGIX = /^[0-9]+$/;
const ALPHAREGIX = /^[a-zA-Z\s]+$/;
const LOWERALPHANUMERICREGIX = /^[a-z0-9\s]+$/;
const UPPERALPHANUMERICREGIX = /^[A-Z0-9\s]+$/;
const ALPHANUMERICREGIX = /^[a-zA-Z0-9\s]+$/;

export const onlyAlphaNumericAndSpaces = (unencrypted) => {
    let regex = /^[0-9A-Za-z\s]+$/;
    return regex.test(unencrypted);
}

const onlyLowerAlphaAndSpaces = (unencrypted) => {
    return LOWERALPHAREGIX.test(unencrypted);
}

const onlyUpperAlphaAndSpaces = (unencrypted) => {
    return UPPERALPHAREGIX.test(unencrypted);
}

const onlyNumeric = (unencrypted) => {
    return NUMERICREGIX.test(unencrypted);
}


const onlyAlphaAndSpaces = (unencrypted) => {
    return ALPHAREGIX.test(unencrypted);
}

const onlyLowerAlphaAndNumericAndSpaces = (unencrypted) => {
    return LOWERALPHANUMERICREGIX.test(unencrypted);
}

const onlyUpperAlphaAndNumericAndSpaces = (unencrypted) => {
    return UPPERALPHANUMERICREGIX.test(unencrypted);
}

const onlyAlphaAndNumericAndSpaces = (unencrypted) => {
    return ALPHANUMERICREGIX.test(unencrypted);
}

