twoPow(prompt('До какой степени возводим?'));

function twoPow(exponent) {
    let baseElem = +prompt('Что возводим?');
    let expElem = document.getElementById('box');
    
    if (!isNaN(+exponent) && !isNaN(baseElem)) {
        for (let i = 1; i <= +exponent; i++) {
            expElem.innerHTML += Math.pow(baseElem, i) + "<br/>";
        }
    }
    else {
        expElem.innerHTML = "Введено не число!";
    }
    return 0;
}