function printSmile(stroka, numberOfRows) {
    stroka = prompt('Какую сущность множим?');
    numberOfRows = prompt('Сколько раз?');
    let strokaPrint = stroka;
    let elem = document.getElementById('box');
    if (!isNaN(+numberOfRows)){
        for (let i = 0; i < +numberOfRows; i++){
            elem.innerHTML += strokaPrint + "<br/>";
            strokaPrint = strokaPrint + stroka;
        }
    }
    else {
        elem.innerHTML = "Введено не число!";
    }
}

printSmile();