function isPalindrom(str) {
    let reg = /\w/g;
    let strReverse = str.toLowerCase().split('').reverse().join('').match(reg);

    for (let i = 0; i < strReverse.length; i++) {
        if (strReverse[i] !== str.toLowerCase().split('').join('').match(reg)[i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom('¿Was it a rat I saw?'))