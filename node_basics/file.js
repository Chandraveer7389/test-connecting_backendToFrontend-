const fs = require('fs');
fs.writeFile('text.txt','Hello There!',(err) => {
    if (err) console.log("Error at file.js " , err)
});
fs.writeFileSync('text2.txt','Hello There Sync!');


const data = fs.readFileSync('example.txt','utf-8')
console.log(data);
fs.readFile('example.txt','utf-8', (err) => {
    if(err) {
        console.log("Error at file.js " , err)
    } else {
        console.log(data, "Normal Read File");
    }
});
fs.appendFile('example.txt','\n This is appended text', (err) => {
    if (err) {
        console.log("Error at file.js " , err)
    }
});