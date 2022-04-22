function getWordStructure(word) {
    let lenVow = word.match(/[aeiouy]/igm).length;
    let lenCon = word.match(/[qwrtpsdfghjklzxcvbnm]/igm).length;
    console.log('Слово '+ word + ' состоит из ' + lenVow + ' гласных и ' + lenCon + ' согласных букв');
}
getWordStructure(prompt('Вводить латиницей:'));