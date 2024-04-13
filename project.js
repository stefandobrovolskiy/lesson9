const fs = require('fs');

const fileName = 'example.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка під час зчитування файлу:', err);
        return;
    }
   
    console.log('Зчитаний текст з файлу:', data);
});
