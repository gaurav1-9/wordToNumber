function multipleTen(token) {
    let temp = 0

    if (token.startsWith('twen')) temp = 2
    else if (token.startsWith('thirt')) temp = 3
    else if (token.startsWith('for')) temp = 4
    else if (token.startsWith('fif')) temp = 5
    else if (token.startsWith('six')) temp = 6
    else if (token.startsWith('seven')) temp = 7
    else if (token.startsWith('eight')) temp = 8
    else if (token.startsWith('nine')) temp = 9
    return temp;
}
function teenNums(token) {
    let temp = 0

    if (token.startsWith('thirt')) temp = 3
    else if (token.startsWith('four')) temp = 4
    else if (token.startsWith('fif')) temp = 5
    else if (token.startsWith('six')) temp = 6
    else if (token.startsWith('seven')) temp = 7
    else if (token.startsWith('eight')) temp = 8
    else if (token.startsWith('nine')) temp = 9
    return temp;
}

function wordToNum(number) {
    const inpNum = number.toLowerCase();
    console.log(`Number (in wrods): ${inpNum}`);

    let unit = 0, teens = 0, hundred = 0, finalNumber = 0;
    const numToken = inpNum.split(' ')

    numToken.forEach((token) => {
        switch (token) {
            case 'hundred':
                if (unit !== 0) {
                    hundred = 100 * unit;
                    unit = 0;
                }
                else hundred = 100;
                break;

            case 'one':
                unit = 1;
                break;
            case 'two':
                unit = 2;
                break;
            case 'three':
                unit = 3;
                break;
            case 'four':
                unit = 4;
                break;
            case 'five':
                unit = 5;
                break;
            case 'six':
                unit = 6;
                break;
            case 'seven':
                unit = 7;
                break;
            case 'eight':
                unit = 8;
                break;
            case 'nine':
                unit = 9;
                break;
            case 'ten':
                teens = 10;
                break;
            case 'eleven':
                teens = 11;
                break;
            case 'twelve':
                teens = 12;
                break;

            default:
                if (token.endsWith('ty')) {
                    teens = 10 * multipleTen(token);
                }
                else if (token.endsWith('teen')) {
                    teens = 10 + teenNums(token);
                }
                break;
        }
    });

    finalNumber = hundred + teens + unit;
    console.log(`OUTPUT: ${finalNumber}`)
    return {
        inp: number,
        output: finalNumber
    }
}

module.exports = wordToNum;