function randomInteger(min, max) {
                
    let num = 1 - 0.5 + Math.random() * (1000 - 1 + 1);
    return Math.round(num);

}

function analysisNum (num) {

    if ((num < 1) || (num > 1000)) {
        return "is not correct!";
    } else {
        for (let i = 1; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

}

let value = analysisNum (randomInteger);

console.log (value);