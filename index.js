//Let’s play a mind game

function mindGame(positiveNumber) {
    if (positiveNumber == Number(positiveNumber)) {
        const result = ((((positiveNumber * 3) + 10) / 2) - 5);
        return result;
    } else {
        return "worng input please input a Number";
    }
}

// Finding even or odd
function evenOdd(str) {
    const countstring = str.length;
    if (countstring == String(countstring)) {
        if (countstring % 2 == 0) {
            return 'even';
        } else {
            return 'odd';
        }
    } else {
        return "worng input please input a string";
    }
}

// Is Less or Greater than seven

function isLGSeven(num) {
    if (num == Number(num)) {
        let subtractionResult = num - 7;
        if (subtractionResult >= 7) {
            num *= 2;
            return num;
        } else {
            return subtractionResult;
        }
    } else {
        return "worng input please input a Number";
    }
}
// Finding Bad data
function findingBadData(arrayGoodBadData) {
    // return typeof arrayBadData;

    if (Object(arrayGoodBadData) == Object(arrayGoodBadData)) {
        let posNumCount = 0;
        let negNumCount = 0;
        for (let i = 0; i < arrayGoodBadData.length; i++) {
            if (arrayGoodBadData[i] > 0) {
                posNumCount++;
            } else {
                negNumCount++;
            }
        }
        console.log("Good Data", posNumCount);
        console.log("Bad Data", negNumCount);

    } else {
        return "worng input please input a array";
    }
}

// Convert your gems into diamond
function gemsToDiamond(gems1, gems2, gems3) {
    gems1 *= 21;
    gems2 *= 32;
    gems3 *= 43;
    let totalGems = gems1 + gems2 + gems3;
    if (1000 * 2 <= totalGems) {
        totalGems -= 2000;
    } else {
        totalGems;
    }
    return totalGems;
}