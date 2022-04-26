function dateString(num) {
    let printString = '';
    let age, year, month, week, day, hour, min;
    do {
        if (num >= 3153600000) {
            age = Math.floor(num / 3153600000);
            printString = printString + age + ' century';
            num = num % 3153600000;
            if (num < 60 && num > 0) {
                printString = printString + ' and ';
            }
            else if (num > 0) {
                printString = printString + ', ';
            }
        } else if (num >= 31536000) {
            year = Math.floor(num / 31536000);
            printString = printString + year + ' years';
            num = num % 31536000;
            if (num < 60 && num > 0) {
                printString = printString + ' and ';
            }
            else if (num > 0) {
                printString = printString + ', ';
            }
        } else if (num >= 2628000) {
            month = Math.floor(num / 2628000);
            printString = printString + month + ' months';
            num = num % 2628000;
            if (num < 60 && num > 0) {
                printString = printString + ' and ';
            }
            else if (num > 0) {
                printString = printString + ', ';
            }
        } else if (num >= 604800) {
            week = Math.floor(num / 604800);
            printString = printString + week + ' weeks';
            num = num % 604800;
            if (num < 60 && num > 0) {
                printString = printString + ' and ';
            }
            else if (num > 0) {
                printString = printString + ', ';
            }
        } else if (num >= 86400) {
            day = Math.floor(num / 86400);
            printString = printString + day + ' days';
            num = num % 86400;
            if (num < 60 && num > 0) {
                printString = printString + ' and ';
            }
            else if (num > 0) {
                printString = printString + ', ';
            }
        } else if (num >= 3600) {
            hour = Math.floor(num / 3600);
            printString = printString + hour + ' hours';
            num = num % 3600;
            if (num < 60 && num > 0) {
                printString = printString + ' and ';
            }
            else if (num > 0) {
                printString = printString + ', ';
            }
        } else if (num >= 60) {
            min = Math.floor(num / 60);
            printString = printString + min + ' minutes';
            num = num % 60;
            if (num < 60 && num > 0) {
                printString = printString + ' and ';
            }
            else if (num > 0) {
                printString = printString + ', ';
            }
        } else if (num < 60 && num > 0) {
            printString = printString + num + ' seconds';
            num = 0;
        } else {
            printString = 'Now or Error';
        }
    } while (num > 0);
    console.log(printString);
}

dateString(3153600062);