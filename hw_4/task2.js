let fs = require('fs');
let dataArr = JSON.parse(fs.readFileSync('task2.json', 'utf8'));
console.log(dataArr);

const makeUniq = (arr) => {
    const seen = {};
    const result = [];
    let j = 0;

    for(let i = 0; i < arr.length; i++) {
        const item = JSON.stringify(arr[i]);
        const key = `${item}`;
        if (!seen[key]) {
            seen[key] = 1;
            result[j++] = arr[i];
        }
    }
    return result;
}

const uniqData = makeUniq(dataArr)
console.log(uniqData);