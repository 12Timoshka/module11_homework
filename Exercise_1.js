let array = [1, NaN, 0, null, 2,undefined, ''];

function arrNumCount (array) {

    let nullCount = 0;
    let unitCount = array.length;
    let evCount = 0;
    let oddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof array[i] === "number" || !Number.isNaN(array[i])) {
            if (array[i] === 0) {
                nullCount += 1;
            } else if (array[i] % 2 === 0) {
                evCount += 1;
            } else {
                oddCount += 1;
            }
        }
    }

    return [nullCount, unitCount, evCount, oddCount];

}

let outcome = arrNumCount (array);

console.log(`This array has: ${unitCount} units, ${nullCount} nulls, ${evCount} even values, ${oddCount} odd values`);