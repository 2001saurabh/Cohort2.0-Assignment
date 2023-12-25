const {readFile, writeFile, } = require('node:fs')


readFile("../files/fileCleaner.txt", "utf8", (err,data) =>{
    if(err){
        console.error(err);
        return;
    }

    var content = data.replace(/\s+/g, " ").trim();
    console.log(content)

    writeFile('../files/fileCleaner.txt', content, (err)=>{
        if (err) throw err;
        console.log('file overwridden')
    })
})


